import "./Wallet.css";

export default function Wallet() {
  return (
    <div className="wallet-page">
      <div className="wallet">

        {/* Top Section */}
        <div className="wallet-top">

          <div className="profile">
            <div className="profile-img">🧒</div>
            <span>Mukhtar</span>
          </div>

          <button className="menu-btn">⋮</button>

          <div className="balance">
            <div className="balance-label">YOUR BALANCE</div>
            <h1>$ 7,552,675.50</h1>
          </div>

          {/* People */}
          <div className="people">
            <div className="person green">👨</div>
            <div className="person yellow">👩</div>
            <div className="person pink">👧</div>
            <div className="person orange">🧑‍🦱</div>
            <div className="person blue">🧑</div>
          </div>

        </div>

        {/* Last Transaction */}
        <div className="transaction">

          <div className="transaction-header">
            <span>Last transaction</span>
            <a href="#">View all</a>
          </div>

          <div className="transaction-info">

            <div className="transaction-left">
              <div className="dribbble-icon">🏀</div>

              <div>
                <h3>Dribbble Pro</h3>
                <p>Sep 3 • 12:30</p>
              </div>
            </div>

            <strong>$7,550.00</strong>

          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="actions">

          <button className="round-btn">
            ⚙️
          </button>

          <button className="round-btn">
            ⇅
          </button>

          <button className="action-btn receive">
            Receive <span>↓</span>
          </button>

          <button className="action-btn send">
            Send <span>↑</span>
          </button>

        </div>

      </div>
    </div>
  );
}