from typing import Optional
from fastapi import FastAPI

my_awesome_api = FastAPI()


@my_awesome_api.get("/")
async def read_root():
    return {"message": "Hello World"}