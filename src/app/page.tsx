export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center" }}>
        <h1>JerseySingles</h1>
        <p>Connecting real people in Jersey & UK</p>
      </header>

      <section style={{ maxWidth: "600px", margin: "40px auto" }}>
        <h2>Join the Waitlist</h2>
        <p>Be the first to know when we launch! Enter your email below.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = new FormData(e.currentTarget).get("email");
            alert(`Thanks! We'll contact: ${email}`);
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Join Waitlist
          </button>
        </form>
      </section>

      <footer style={{ textAlign: "center", marginTop: "60px" }}>
        <a href="/privacy">Privacy Policy</a> |{" "}
        <a href="/terms">Terms & Conditions</a>
      </footer>
    </main>
  );
}
