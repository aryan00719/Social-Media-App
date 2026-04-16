export default function Avatar({ initials, color }) {
    return (
        <div style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
        }}>
            {initials}
        </div>
    );
}