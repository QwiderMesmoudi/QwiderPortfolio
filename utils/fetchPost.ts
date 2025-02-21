
export async function fetchPost(){
    console.log("I got here")
    const res = await fetch("http://localhost:3000/api/getPost")
    console.log(res)
    const data = await  res.json()
    const post=data.posts
    console.log(post)
    return post
}