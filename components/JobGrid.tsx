"use client";

import { useState, useMemo } from "react";
import { mockVacancies, type Vacancy } from "@/data/mockVacancies";
import JobCard from "./JobCard";
import JobDetailPanel from "./JobDetailPanel";
import SearchBar from "./SearchBar";
import FilterBar, { type Filters } from "./FilterBar";

export default function JobGrid() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [activeLocation, setActiveLocation] = useState("");
  const [filters, setFilters] = useState<Filters>({
    sector: "",
    contracttype: "",
    salaris: "",
    niveau: "",
  });
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);

  const handleSearch = () => {
    setActiveQuery(query);
    setActiveLocation(location);
  };

  const filtered = useMemo(() => {
    return mockVacancies.filter((v) => {
      const matchQuery =
        !activeQuery ||
        v.titel.toLowerCase().includes(activeQuery.toLowerCase()) ||
        v.bedrijf.toLowerCase().includes(activeQuery.toLowerCase()) ||
        v.beschrijving.toLowerCase().includes(activeQuery.toLowerCase());

      const matchLocation =
        !activeLocation ||
        v.locatie.toLowerCase().includes(activeLocation.toLowerCase());

      const matchSector = !filters.sector || v.sector === filters.sector;
      const matchContract = !filters.contracttype || v.contracttype === filters.contracttype;
      const matchNiveau = !filters.niveau || v.niveau === filters.niveau;

      let matchSalaris = true;
      if (filters.salaris) {
        const salarisNum = parseInt(v.salaris.replace(/[^0-9]/g, "").slice(0, 4));
        if (filters.salaris === "€0 - €2.000") matchSalaris = salarisNum <= 2000;
        else if (filters.salaris === "€2.000 - €3.000") matchSalaris = salarisNum >= 2000 && salarisNum <= 3000;
        else if (filters.salaris === "€3.000 - €4.000") matchSalaris = salarisNum >= 3000 && salarisNum <= 4000;
        else if (filters.salaris === "€4.000 - €5.000") matchSalaris = salarisNum >= 4000 && salarisNum <= 5000;
        else if (filters.salaris === "€5.000+") matchSalaris = salarisNum >= 5000;
      }

      return matchQuery && matchLocation && matchSector && matchContract && matchNiveau && matchSalaris;
    });
  }, [activeQuery, activeLocation, filters]);

  return (
    <div>
      {/* Hero zoekbalk */}
      <section className="bg-[#1E2A4A] py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Vind jouw droombaan <span className="text-[#10B981]">in één klik</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            AI schrijft jouw sollicitatiebrief — jij solliciteert met één druk op de knop
          </p>
          <SearchBar
            query={query}
            location={location}
            onQueryChange={setQuery}
            onLocationChange={setLocation}
            onSearch={handleSearch}
          />
        </div>
      </section>

      {/* Filterbar */}
      <FilterBar filters={filters} onChange={setFilters} totalResults={filtered.length} />

      {/* Vacatures */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#6B7280] text-lg">
              Geen vacatures gevonden. Probeer andere zoektermen of filters.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setLocation("");
                setActiveQuery("");
                setActiveLocation("");
                setFilters({ sector: "", contracttype: "", salaris: "", niveau: "" });
              }}
              className="mt-4 text-[#10B981] hover:text-[#059669] font-medium underline"
            >
              Wis alle filters
            </button>
          </div>
        ) : selectedVacancy ? (
          /* Split-view: cards links, detail rechts */
          <div className="flex gap-5 items-start">
            {/* Links: scrollbare kaartjes */}
            <div className="hidden md:flex flex-col gap-4 w-[380px] xl:w-[420px] shrink-0">
              {filtered.map((vacancy) => (
                <JobCard
                  key={vacancy.id}
                  vacancy={vacancy}
                  isSelected={vacancy.id === selectedVacancy.id}
                  onSelect={() => setSelectedVacancy(vacancy)}
                />
              ))}
            </div>

            {/* Rechts: detail panel (sticky) */}
            <div className="flex-1 sticky top-20 min-w-0">
              <JobDetailPanel
                vacancy={selectedVacancy}
                onClose={() => setSelectedVacancy(null)}
              />
            </div>
          </div>
        ) : (
          /* Normaal grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((vacancy) => (
              <JobCard
                key={vacancy.id}
                vacancy={vacancy}
                onSelect={() => setSelectedVacancy(vacancy)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
