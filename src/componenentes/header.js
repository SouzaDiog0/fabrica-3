import Link from "next/link"
import Nav from './nav'
export default function Header(){
    return(
        <div className = "flex gap-x-4 justify-center p-4 teste">
            <Nav titulo="inicio" url = "/"/>
            <Nav titulo="walace" url = "/walace"/>
            <Nav titulo="sobre" url = "/sobre"/>
            
        </div>
    )

}