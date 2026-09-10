# Homelab ESXi — Documentación de arquitectura

Documentación de un laboratorio de virtualización doméstico: clúster de 3 hosts ESXi, almacenamiento compartido en TrueNAS, red segmentada sobre un switch Cisco L3 y salida a internet por un router MikroTik.

**Página completa:** https://thebillbull.github.io/homelab-esxi/

## Estructura

Sitio estático de 5 páginas, sin build step:

- `index.html` — Arquitectura: topología física, capa física, origen del hardware, alcance y próximos pasos
- `almacenamiento.html` — Construcción física de TrueNAS, pools NVMe/HDD y protocolos, ampliación de capacidad
- `red.html` — Las 10 categorías de VLAN y el aislamiento físico de la de Multimedia
- `computo.html` — Clúster HA/DRS, cargas de trabajo, passthrough de GPU para Jellyfin, acceso remoto
- `changelog.html` — Línea temporal con el histórico completo de cambios de infraestructura

Cada página de detalle enlaza al final con su propio historial de cambios, y todo el historial completo vive en `changelog.html`.

## Nota sobre privacidad

Esta documentación describe decisiones de diseño y arquitectura, no la red en sí: se omiten intencionadamente direcciones IP, identificadores numéricos de VLAN, puertos físicos del switch y cualquier credencial.

## Tecnología

Páginas estáticas en HTML/CSS puro (sin frameworks ni dependencias), con diagramas en Mermaid. Publicado con GitHub Pages.
