import sys
import os

# Add src directory to Python path
current_dir = os.path.dirname(os.path.abspath(__file__))
src_path = os.path.join(current_dir, '..', 'src')
sys.path.insert(0, src_path)

# Import FastAPI app
from main import app

# This is the handler that Vercel will call
def handler(request, context):
    return app