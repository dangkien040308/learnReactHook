import { useEffect, useState } from "react";

export default function PrintTable({calculateTable}) {
    const [rows, setRows] = useState([])
    useEffect( () => {
      console.log('Print table !')
      setRows(calculateTable())
    },[calculateTable])

    return rows.map((item,key) => {
        return (
            <div key={key}>{item}</div>
        )
    })
}