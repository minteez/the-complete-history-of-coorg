import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Place } from "@/data/places";

export default function MapView({ places }: { places: Place[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(
      [12.38, 75.72],
      9.5,
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(map);
    layerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    layer.clearLayers();
    places.forEach((p) => {
      L.circleMarker([p.lat, p.lng], {
        radius: 8,
        weight: 2,
        color: "hsl(28 62% 42%)",
        fillColor: "hsl(150 30% 24%)",
        fillOpacity: 0.85,
      })
        .bindPopup(
          `<strong>${p.name}</strong><br/><em>${p.period}</em><br/>${p.summary}`,
          { maxWidth: 260 },
        )
        .addTo(layer);
    });
    if (places.length && mapRef.current) {
      mapRef.current.fitBounds(
        L.latLngBounds(places.map((p) => [p.lat, p.lng] as [number, number])).pad(0.25),
      );
    }
  }, [places]);

  return (
    <div
      ref={containerRef}
      role="application"
      aria-label="Map of historical places in Kodagu"
      className="h-[28rem] w-full rounded-lg border border-border md:h-[34rem]"
    />
  );
}
