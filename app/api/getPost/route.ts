import { client } from "@/sanity/lib/client";
import { Post } from "@/typing";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query =  groq`
*[_type == "post"]
`
type Data={
    post:Post[]
}

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    console.log("YELLO 11111111")
    
    const posts:Post[]=await client.fetch(query)
    console.log("YELLO ")
    return res.status(200).json(posts)
}