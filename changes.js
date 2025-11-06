document.addEventListener("DOMContentLoaded", () => {
  const changelogData = [
    {
      title: "The Beginning - 06/11/2025 22:30",
      paragraphs: [
        "The official development for dotLinux has begun, the exact date is unknown, but our goal is to make the perfect distribution, the one that has the perfect, simple, and sleek UI.",
        "We do not promise anything, the development could stop at this exact moment, we will NEVER announce a release date outside of this website, so be aware of any fake news."
      ]
    },
    {
        title: "Development closed for now - 06/11/2025 22:58",
        paragraphs: [
            "There were some issues with the development so we have decided to leave this project behind for now, any news will appear here."
        ]
    }
  ];

  const changelogContainer = document.getElementById("changelog");

  changelogData.slice().reverse().forEach(entry => {
    const card = document.createElement("div");
    card.classList.add("changelogcard");

    const title = document.createElement("h1");
    title.textContent = entry.title;
    card.appendChild(title);

    entry.paragraphs.forEach(text => {
      const p = document.createElement("p");
      p.classList.add("changelogtext");
      p.textContent = text;
      card.appendChild(p);
    });

    changelogContainer.appendChild(card);
  });

  const cards = document.querySelectorAll(".changelogcard");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = Array.from(cards).indexOf(card);
          card.style.transitionDelay = `${index * 0.1}s`;
          card.classList.add("visible");
          obs.unobserve(card);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => observer.observe(card));
});
