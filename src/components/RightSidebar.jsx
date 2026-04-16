import { TRENDING } from "../data/mockData";

export default function RightSidebar() {
    return (
        <div>
            <h3>Trending</h3>
            {TRENDING.map(t => <p key={t}>{t}</p>)}
        </div>
    );
}