export default function Footer() {
    return (
        <footer>
            <div className="h-10 bg-gray-800 text-zinc-500 text-sm flex items-center justify-end bordert-zinc-800 p-2">
                Three Town Hope: All rights reserved &copy; {new Date().getFullYear()}
            </div>
        </footer>
    )
}
