// The Ledger V3: Visualizer and Tabulation Engine

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dashboard Aggregates
  if (typeof LEDGER !== "undefined" && LEDGER.entries) {
    const entries = LEDGER.entries;
    const total = entries.length;
    const wins = entries.filter(e => e.status === "win").length;
    const pending = entries.filter(e => e.status === "pending").length;
    const losses = entries.filter(e => e.status === "loss").length;

    const statTotal = document.querySelector("#stat-total .stat-number");
    const statWins = document.querySelector("#stat-wins .stat-number");
    const statPending = document.querySelector("#stat-pending .stat-number");
    const statLosses = document.querySelector("#stat-losses .stat-number");

    if (statTotal) statTotal.textContent = total;
    if (statWins) statWins.textContent = wins;
    if (statPending) statPending.textContent = pending;
    if (statLosses) statLosses.textContent = losses;

    // 2. Render Proportional Volume Bar Chart
    setupBarChart();

    // 3. Render The Constellation (Pending)
    renderConstellation(entries);

    // 4. Render The Strata (Losses)
    renderStrata(entries);
  }

  // 5. Interactive Ledger Table
  setupLedgerTable();

  // 6. ScrollSpy Navigation Tracker
  setupScrollSpy();
});

function setupScrollSpy() {
  const sections = [
    { id: "cover", index: "01", name: "COVER" },
    { id: "dashboard", index: "02", name: "AGGREGATES" },
    { id: "chart", index: "03", name: "VOLUME" },
    { id: "constellation", index: "04", name: "PENDING" },
    { id: "strata", index: "05", name: "STRATA" },
    { id: "document", index: "06", name: "CENSUS" },
    { id: "footer", index: "07", name: "COLOPHON" }
  ];

  const sidebarIndex = document.getElementById("sidebarIndex");
  const sidebarCurrent = document.getElementById("sidebarCurrent");
  const navItems = document.querySelectorAll(".nav-item");

  function onScroll() {
    const scrollPos = window.scrollY + 180;
    let currentSection = sections[0];

    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(sections[i].id);
      if (el) {
        const top = el.offsetTop;
        if (scrollPos >= top) {
          currentSection = sections[i];
        }
      }
    }

    if (sidebarIndex) {
      sidebarIndex.textContent = `INDEX / ${currentSection.index}-07`;
    }
    if (sidebarCurrent) {
      sidebarCurrent.textContent = currentSection.name;
    }

    navItems.forEach(item => {
      if (item.getAttribute("data-index") === currentSection.index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupBarChart() {
  const container = document.getElementById("chartContainer");
  if (!container || typeof LEDGER_DATA === "undefined") return;

  container.innerHTML = "";

  // 1. Count total entries per outcome
  const wins = LEDGER_DATA.filter(e => e.status === "win").length;
  const losses = LEDGER_DATA.filter(e => e.status === "loss").length;
  const pending = LEDGER_DATA.filter(e => e.status === "pending").length;

  // 2. Max count for 100% proportional width reference
  const maxCount = Math.max(wins, losses, pending, 1);

  const categories = [
    { label: "ACCEPTED / WINS", count: wins, type: "win" },
    { label: "LOSSES / REJECTED", count: losses, type: "loss" },
    { label: "PENDING / TBD", count: pending, type: "pending" }
  ];

  // 3. Inject rows
  categories.forEach(item => {
    const widthPercentage = ((item.count / maxCount) * 100).toFixed(1);
    const rowEl = document.createElement("div");
    rowEl.className = "chart-row";
    rowEl.innerHTML = `
      <div class="chart-label-group">
        <span>${item.label}</span>
        <span>${item.count}</span>
      </div>
      <div class="chart-bar-wrapper">
        <div class="chart-bar ${item.type}" style="width: 0%;" data-width="${widthPercentage}%"></div>
      </div>
    `;
    container.appendChild(rowEl);
  });

  // 4. Trigger snappy animation using IntersectionObserver (or fallback timeout)
  const bars = container.querySelectorAll(".chart-bar");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    observer.observe(container);
  } else {
    setTimeout(() => {
      bars.forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
      });
    }, 150);
  }
}

function renderConstellation(entries) {
  const container = document.getElementById("scatterContainer");
  if (!container) return;

  const pendingEntries = entries.filter(e => e.status === "pending");
  container.innerHTML = "";

  pendingEntries.forEach(item => {
    const card = document.createElement("div");
    card.className = "scatter-card";
    card.innerHTML = `
      <div>
        <div class="scatter-card-header">
          <span class="scatter-tag">TIER ${item.tier || 3}</span>
          <span class="scatter-date">${item.date}</span>
        </div>
        <h3 class="scatter-title">${item.title}</h3>
        <p class="scatter-org">${item.org}</p>
      </div>
      <div class="scatter-remark">
        ${item.remark || "Awaiting decision."}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderStrata(entries) {
  const container = document.getElementById("strataStack");
  if (!container) return;

  const lossEntries = entries.filter(e => e.status === "loss");
  container.innerHTML = "";

  lossEntries.forEach(item => {
    const bar = document.createElement("div");
    bar.className = `strata-bar ${item.milestone ? "milestone-loss" : ""}`;
    bar.innerHTML = `
      <div class="strata-bar-main">
        <div class="strata-bar-title">${item.title}</div>
        ${item.lesson ? `<div class="strata-bar-lesson">“${item.lesson}”</div>` : ""}
        ${item.remark ? `<div class="strata-bar-remark">${item.remark}</div>` : ""}
      </div>
      <div class="strata-bar-meta">
        <span class="strata-bar-date">${item.date}</span>
        ${item.milestone ? `<span class="strata-fault-tag">FAULT LINE</span>` : ""}
      </div>
    `;
    container.appendChild(bar);
  });
}

function setupLedgerTable() {
  const tbody = document.getElementById("ledgerTableBody");
  const searchInput = document.getElementById("searchInput");
  if (!tbody || typeof LEDGER_DATA === "undefined") return;

  function populateTable(data) {
    tbody.innerHTML = "";
    data.forEach(item => {
      const tr = document.createElement("tr");
      tr.className = `row-${item.status}`;
      tr.innerHTML = `
        <td class="table-date">${item.date}</td>
        <td class="table-title">${item.label}</td>
        <td class="table-org">${item.org || "—"}</td>
        <td class="table-status"><strong>${item.status.toUpperCase()}</strong></td>
        <td class="table-tier">T${item.tier || 3}</td>
        <td class="table-remark">${item.remark || "—"}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  populateTable(LEDGER_DATA);

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        populateTable(LEDGER_DATA);
        return;
      }
      const filtered = LEDGER_DATA.filter(item => {
        return (
          item.label.toLowerCase().includes(query) ||
          (item.org && item.org.toLowerCase().includes(query)) ||
          item.date.includes(query) ||
          item.status.toLowerCase().includes(query) ||
          (item.remark && item.remark.toLowerCase().includes(query))
        );
      });
      populateTable(filtered);
    });
  }
}
