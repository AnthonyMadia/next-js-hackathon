import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav>
            Home in header
            <ConnectButton moralisAuth={false} />
        </nav>
    )
}