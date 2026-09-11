/* Homelab ESXi — comportamiento común: diagramas Mermaid y el índice lateral. */
(function () {
  "use strict";

  function isDark() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Diagramas: colores sacados de la misma paleta que el resto del sitio.
  if (window.mermaid) {
    var dark = isDark();
    window.mermaid.initialize({
      startOnLoad: true,
      securityLevel: "strict",
      theme: "base",
      fontFamily: '"IBM Plex Sans", "Segoe UI", system-ui, sans-serif',
      themeVariables: dark ? {
        background: "#161B21",
        primaryColor: "#1C232A",
        primaryBorderColor: "#95A0AB",
        primaryTextColor: "#E5E9ED",
        lineColor: "#95A0AB",
        secondaryColor: "#2A2410",
        tertiaryColor: "#161B21",
        clusterBkg: "#12171C",
        clusterBorder: "#3A444E",
        edgeLabelBackground: "#161B21"
      } : {
        background: "#FFFFFF",
        primaryColor: "#F3F5F8",
        primaryBorderColor: "#4E5964",
        primaryTextColor: "#14181D",
        lineColor: "#4E5964",
        secondaryColor: "#FDF3D0",
        tertiaryColor: "#FFFFFF",
        clusterBkg: "#F8F9FB",
        clusterBorder: "#C3CAD2",
        edgeLabelBackground: "#FFFFFF"
      }
    });
  }

  // Índice lateral: marca la sección que se está leyendo.
  var toc = document.getElementById("toc");
  if (toc && "IntersectionObserver" in window) {
    var links = Array.prototype.slice.call(toc.querySelectorAll("a[href^='#']"));
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var link = byId[entry.target.id];
        if (!link) return;
        links.forEach(function (a) { a.classList.remove("active"); });
        link.classList.add("active");
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { observer.observe(s); });
  }
})();
