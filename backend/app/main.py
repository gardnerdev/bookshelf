from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi import Depends, FastAPI, HTTPException, status, Response

app = FastAPI()


@app.get("/")
async def get():
    return JSONResponse(content="Hello world!")
