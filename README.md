# Homelab ESXi — Documentación de arquitectura

Documentación pública de un laboratorio de virtualización doméstico: clúster VMware ESXi de cuatro
nodos con hardware reacondicionado, almacenamiento compartido en TrueNAS, red segmentada en un switch
de capa 3, dos servicios publicados en internet a través de un reverse proxy propio en DMZ, y un vigía
externo que comprueba lo publicado desde fuera.

**Web:** https://thebillbull.github.io/homelab-esxi/

## Páginas

| Fichero | Contenido |
|---|---|
| `index.html` | Arquitectura: estado del laboratorio, topología, capa física, origen del hardware y método de trabajo |
| `maquinas.html` | Inventario: servicios que entrega, máquinas virtuales, equipos físicos, vigilancia y capacidad |
| `red.html` | Plan de VLANs, qué se enruta, almacenamiento con dos caminos y la DMZ tras un cortafuegos con estado |
| `almacenamiento.html` | Construcción de TrueNAS, pools y protocolos, datastores y una ampliación de capacidad |
| `computo.html` | Clúster: alta disponibilidad ante cada fallo, migración en caliente, mantenimiento y margen |
| `publicacion.html` | Del túnel de Cloudflare al reverse proxy propio: recorrido, capas de protección y pruebas |
| `incidencias.html` | Fallos reales: síntoma, causa, arreglo y la regla que quedó |
| `changelog.html` | Evolución del laboratorio por fases y lo que viene |
| `assets/site.css`, `assets/site.js` | Estilos y comportamiento comunes (diagramas Mermaid e índice lateral) |

Cada componente se marca con su estado real: **en servicio**, **en curso** o **planificado**.

## Privacidad

Se omiten a propósito direcciones IP, puertos físicos, nombres de dominio y cualquier credencial.
Los identificadores de VLAN son **ilustrativos**: la estructura del plan es la real, la numeración no.

## Tecnología

HTML y CSS estáticos, sin build ni frameworks. Diagramas con Mermaid y tipografías de Google Fonts
(Chakra Petch, IBM Plex Sans, IBM Plex Mono). Publicado con GitHub Pages.
