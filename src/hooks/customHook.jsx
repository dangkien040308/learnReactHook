import useFetch from "./useFetch"
// Custom hooks are basically a reusable function 
// In simple terms, custom hooks are your own hooks that you create for your own use and you can use them multiple time in your project 

export default function CustomHook() {
    const data = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <div>
          {data.map((item,key) => (
            <div key={key}>{item.id}. {item.name}</div>
          ) )}
        </div>
    )
}