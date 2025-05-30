import { apiResponse } from "@/core/helpers/apiResponse";
import { errorHandler } from "@/core/helpers/errorHandler";
import { NextRequest } from "next/server";
import { ConnectDB } from "@/core/configs/mongoDB";
import Update from "@/core/models/updateModel";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"

export async function DELETE(req:NextRequest, {params}:{params:Promise<{updateId:string}>}){
    try{
        //database connection
        await ConnectDB()

        //getting the accessToken from the cookies
        const token =  (await cookies()).get("accessToken")?.value as string | undefined
        if(!token){
            return errorHandler(401, "unauthorized", null)
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET! as string) as {id:string, username:string,roles:string};
        const decodedUser = decodedToken;

        if(decodedUser.roles != "Admin"){
            return errorHandler(401, "unauthorized", "not admin")
        }

        const updateId  = (await params).updateId
        const update = await Update.findByIdAndDelete({id:updateId})
        if(!update){
            return errorHandler(404, "invalid update", null)
        }
        return apiResponse("update deleted", 200, null)
    }catch(error){
        return errorHandler(500, "server error",error)
    }
}

export async function PATCH(req:NextRequest, {params}:{params:Promise<{updateId:string}>}){
    try{
        //database connection
        await ConnectDB()

        //getting the accessToken from the cookies
        const token =  (await cookies()).get("accessToken")?.value as string | undefined
        if(!token){
            return errorHandler(401, "unauthorized", null)
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET! as string) as {id:string, username:string,roles:string};
        const decodedUser = decodedToken;

        if(decodedUser.roles != "Admin"){
            return errorHandler(401, "unauthorized", "not admin")
        }

        //params
        const updateId  = (await params).updateId
        
        //data from the user
        const reqBody = await req.json()
        const { description, title } = reqBody

        //getting the comment
        const update = await Update.findOne({_id:updateId})
        if(!update){
            return errorHandler(404, "invalid update id", null)
        }

        update.description = description
        update.title = title
        await update.save()

        return apiResponse("update updated", 200, update)
    }catch(error){
        return errorHandler(500, "server error", error)
    }
}