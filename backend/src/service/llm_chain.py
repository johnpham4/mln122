from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferWindowMemory, ConversationBufferMemory
from langchain.chains import ConversationChain
import config


def get_memory():
    if config.MEMORY_TYPE == "window":
        return ConversationBufferWindowMemory(  
            k=config.MEMORY_WINDOW,
            return_messages=True
        )
    else:
        return ConversationBufferMemory(
            return_messages=True
        )

memory = get_memory()

def get_llm(callbacks=None):
    return ChatOpenAI(
        model=config.MODEL_NAME,
        api_key=config.API_KEY,
        base_url=config.BASE_URL,
        streaming=True,
        callbacks=callbacks,
        temperature=getattr(config, "TEMPERATURE", 0.7),
        max_tokens=getattr(config, "MAX_TOKENS", 512),
    )

def get_conversation(callbacks=None):
    llm = get_llm(callbacks)
    return ConversationChain(
        llm=llm,
        memory=memory,
        verbose=True
    )
