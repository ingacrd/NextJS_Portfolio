
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-between">
            <Image
                src="/images/logo.png"
                width={100}
                height={23}
                className=""
            />
            <p className="text-slate-600 text-xs">Copyright © 2024 Andrea Carolina Ruiz Diaz</p>
        </div>
    </footer>
  )
}

export default Footer