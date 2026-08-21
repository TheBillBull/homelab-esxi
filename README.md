# Homelab ESXi — Documentación de arquitectura

Documentación de un laboratorio de virtualización doméstico: clúster de 3 hosts ESXi, almacenamiento compartido en TrueNAS, red segmentada sobre un switch Cisco L3 y salida a internet por un router MikroTik.

**Página completa:** https://thebillbull.github.io/homelab-esxi/

## Qué incluye

- Topología física del laboratorio (hosts, switch, router, TrueNAS) y cómo se reparten las NIC de cada equipo
- Segmentación de red: 9 categorías de VLAN y su propósito
- Configuración del clúster de virtualización (vDS, HA, DRS)
- Diseño de almacenamiento: pools en espejo sobre TrueNAS, servidos por iSCSI y NFS
- Cargas de trabajo: directorio activo/DNS y un servidor Jellyfin sobre Docker
- Cómo se publica Jellyfin hacia fuera mediante un túnel de Cloudflare, sin abrir puertos

## Nota sobre privacidad

Esta documentación describe decisiones de diseño y arquitectura, no la red en sí: se omiten intencionadamente direcciones IP, identificadores numéricos de VLAN, puertos físicos del switch y cualquier credencial.

## Tecnología

Página estática en HTML/CSS puro (sin frameworks ni dependencias), con diagramas en Mermaid. Publicada con GitHub Pages.
