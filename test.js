import { check } from 'k6';
import http from 'k6/http';
import exec from 'k6/execution';

export const options = {
  vus: 100,
  duration: '10s',
};

let id = 0;
const endpoint = "https://lindas-cached.test.cluster.ldbar.ch/query/benchmark";

const queries = [
  `
    #BENCHMARK: Query 1

    #pragma describe.strategy cbd
    #pragma join.hash off


    PREFIX unit: <http://qudt.org/vocab/unit/>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX qudt: <http://qudt.org/schema/qudt/>

    SELECT DISTINCT ?iri ?label ?isCurrency ?currencyExponent ?isCurrency

    WHERE {

            values ?iri {
              unit:Rappen-PER-KiloW-HR
    unit:KiloW-HR-PER-Year
    unit:PERCENT
            }

            OPTIONAL { ?iri rdfs:label ?rdfsLabel }
            OPTIONAL { ?iri  qudt:symbol  ?symbol }
            OPTIONAL { ?iri  qudt:ucumCode  ?ucumCode }
            OPTIONAL { ?iri  qudt:expression  ?expression }

            OPTIONAL { ?iri ?isCurrency qudt:CurrencyUnit }
            OPTIONAL { ?iri qudt:currencyExponent ?currencyExponent }

            BIND(str(coalesce(str(?symbol), str(?ucumCode), str(?expression), str(?rdfsLabel), "?")) AS ?label)

            FILTER ( lang(?rdfsLabel) = "en" )

    }
  `,
  `
    #BENCHMARK: Query 2

    #pragma describe.strategy cbd
    #pragma join.hash off

    #pragma describe.strategy cbd
    #pragma join.hash off

    SELECT DISTINCT ?dimension0 ?dimension1 ?dimension2 ?dimension3 ?dimension4 ?dimension5 ?dimension6 ?dimension7 ?dimension8 ?dimension9 ?dimension10 ?dimension11 ?dimension12 ?dimension13 ?dimension14 ?dimension15 WHERE {
      <https://energy.ld.admin.ch/elcom/electricityprice> <https://cube.link/observationSet> ?observationSet0 .
      ?observationSet0 <https://cube.link/observation> ?source0 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/category> ?dimension0 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/municipality> ?dimension1 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/operator> ?dimension2 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/period> ?dimension3 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/aidfee> ?dimension4 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/charge> ?dimension5 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/energy> ?dimension6 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/fixcosts> ?dimension7 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/fixcostspercent> ?dimension8 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/gridusage> ?dimension9 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/total> ?dimension10 .
      ?source0 <https://energy.ld.admin.ch/elcom/electricityprice/dimension/product> ?dimension11 .
      FILTER (
        (?dimension1 = <https://ld.admin.ch/municipality/1>)
      )
      FILTER (
        (?dimension0 = <https://energy.ld.admin.ch/elcom/electricityprice/category/C1>)
      )
      FILTER (
        (?dimension2 = <https://energy.ld.admin.ch/elcom/electricityprice/operator/486>)
      )
      FILTER (
        (?dimension11 = <https://energy.ld.admin.ch/elcom/electricityprice/product/standard>)
      )
      OPTIONAL {
        ?dimension0 <http://schema.org/name> ?dimension12_0 .
        FILTER (
          LANGMATCHES(LANG(?dimension12_0), "de")
        )
      }
      OPTIONAL {
        ?dimension0 <http://schema.org/name> ?dimension12_1 .
        FILTER (
          LANGMATCHES(LANG(?dimension12_1), "fr")
        )
      }
      OPTIONAL {
        ?dimension0 <http://schema.org/name> ?dimension12_2 .
        FILTER (
          LANGMATCHES(LANG(?dimension12_2), "it")
        )
      }
      OPTIONAL {
        ?dimension0 <http://schema.org/name> ?dimension12_3 .
        FILTER (
          LANGMATCHES(LANG(?dimension12_3), "en")
        )
      }
      OPTIONAL {
        ?dimension0 <http://schema.org/name> ?dimension12_4 .
        FILTER (
          (LANG(?dimension12_4) = "")
        )
      }
      BIND(COALESCE(?dimension12_0, ?dimension12_1, ?dimension12_2, ?dimension12_3, ?dimension12_4) AS ?dimension12)
      OPTIONAL {
        ?dimension1 <http://schema.org/name> ?dimension13_0 .
        FILTER (
          LANGMATCHES(LANG(?dimension13_0), "de")
        )
      }
      OPTIONAL {
        ?dimension1 <http://schema.org/name> ?dimension13_1 .
        FILTER (
          LANGMATCHES(LANG(?dimension13_1), "fr")
        )
      }
      OPTIONAL {
        ?dimension1 <http://schema.org/name> ?dimension13_2 .
        FILTER (
          LANGMATCHES(LANG(?dimension13_2), "it")
        )
      }
      OPTIONAL {
        ?dimension1 <http://schema.org/name> ?dimension13_3 .
        FILTER (
          LANGMATCHES(LANG(?dimension13_3), "en")
        )
      }
      OPTIONAL {
        ?dimension1 <http://schema.org/name> ?dimension13_4 .
        FILTER (
          (LANG(?dimension13_4) = "")
        )
      }
      BIND(COALESCE(?dimension13_0, ?dimension13_1, ?dimension13_2, ?dimension13_3, ?dimension13_4) AS ?dimension13)
      OPTIONAL {
        ?dimension2 <http://schema.org/name> ?dimension14_0 .
        FILTER (
          LANGMATCHES(LANG(?dimension14_0), "de")
        )
      }
      OPTIONAL {
        ?dimension2 <http://schema.org/name> ?dimension14_1 .
        FILTER (
          LANGMATCHES(LANG(?dimension14_1), "fr")
        )
      }
      OPTIONAL {
        ?dimension2 <http://schema.org/name> ?dimension14_2 .
        FILTER (
          LANGMATCHES(LANG(?dimension14_2), "it")
        )
      }
      OPTIONAL {
        ?dimension2 <http://schema.org/name> ?dimension14_3 .
        FILTER (
          LANGMATCHES(LANG(?dimension14_3), "en")
        )
      }
      OPTIONAL {
        ?dimension2 <http://schema.org/name> ?dimension14_4 .
        FILTER (
          (LANG(?dimension14_4) = "")
        )
      }
      BIND(COALESCE(?dimension14_0, ?dimension14_1, ?dimension14_2, ?dimension14_3, ?dimension14_4) AS ?dimension14)
      OPTIONAL {
        ?dimension11 <http://schema.org/name> ?dimension15_0 .
        FILTER (
          LANGMATCHES(LANG(?dimension15_0), "de")
        )
      }
      OPTIONAL {
        ?dimension11 <http://schema.org/name> ?dimension15_1 .
        FILTER (
          LANGMATCHES(LANG(?dimension15_1), "fr")
        )
      }
      OPTIONAL {
        ?dimension11 <http://schema.org/name> ?dimension15_2 .
        FILTER (
          LANGMATCHES(LANG(?dimension15_2), "it")
        )
      }
      OPTIONAL {
        ?dimension11 <http://schema.org/name> ?dimension15_3 .
        FILTER (
          LANGMATCHES(LANG(?dimension15_3), "en")
        )
      }
      OPTIONAL {
        ?dimension11 <http://schema.org/name> ?dimension15_4 .
        FILTER (
          (LANG(?dimension15_4) = "")
        )
      }
      BIND(COALESCE(?dimension15_0, ?dimension15_1, ?dimension15_2, ?dimension15_3, ?dimension15_4) AS ?dimension15)
    }
    GROUP BY ?dimension0 ?dimension1 ?dimension2 ?dimension3 ?dimension4 ?dimension5 ?dimension6 ?dimension7 ?dimension8 ?dimension9 ?dimension10 ?dimension11 ?dimension12 ?dimension13 ?dimension14 ?dimension15
  `,
  `
    #BENCHMARK: Query 3

    PREFIX cube: <https://cube.link/>
    PREFIX geo: <http://www.opengis.net/ont/geosparql#>
    PREFIX schema: <http://schema.org/>
    PREFIX sh: <http://www.w3.org/ns/shacl#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

    CONSTRUCT {
      ?dimensionIri rdf:first ?unversionedValue .
      ?unversionedValue
        schema:name ?name ;
        schema:alternateName ?alternateName ;
        schema:description ?description ;
        schema:identifier ?identifier ;
        schema:position ?position ;
        schema:color ?color ;
        geo:hasGeometry ?geometry ;
        schema:latitude ?latitude ;
        schema:longitude ?longitude .
    } WHERE {
      { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/category> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            ?dimension schema:version ?version .
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            ?versionedValue schema:sameAs ?unversionedValue .
          }
        } UNION { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/category> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            FILTER NOT EXISTS { ?dimension schema:version ?version . }
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            BIND(?versionedValue as ?unversionedValue)
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/category> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      ?dimension schema:version ?version .
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/category> }
              ?observation ?dimensionIri ?versionedValue .
              ?versionedValue schema:sameAs ?unversionedValue .
            }
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/category> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      FILTER NOT EXISTS { ?dimension schema:version ?version . }
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/category> }
              ?observation ?dimensionIri ?versionedValue .
              BIND(?versionedValue as ?unversionedValue)
            }
          }
        }
    UNION { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/municipality> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            ?dimension schema:version ?version .
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            ?versionedValue schema:sameAs ?unversionedValue .
          }
        } UNION { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/municipality> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            FILTER NOT EXISTS { ?dimension schema:version ?version . }
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            BIND(?versionedValue as ?unversionedValue)
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/municipality> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      ?dimension schema:version ?version .
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/municipality> }
              ?observation ?dimensionIri ?versionedValue .
              ?versionedValue schema:sameAs ?unversionedValue .
            }
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/municipality> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      FILTER NOT EXISTS { ?dimension schema:version ?version . }
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/municipality> }
              ?observation ?dimensionIri ?versionedValue .
              BIND(?versionedValue as ?unversionedValue)
            }
          }
        }
    UNION { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/operator> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            ?dimension schema:version ?version .
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            ?versionedValue schema:sameAs ?unversionedValue .
          }
        } UNION { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/operator> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            FILTER NOT EXISTS { ?dimension schema:version ?version . }
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            BIND(?versionedValue as ?unversionedValue)
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/operator> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      ?dimension schema:version ?version .
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/operator> }
              ?observation ?dimensionIri ?versionedValue .
              ?versionedValue schema:sameAs ?unversionedValue .
            }
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/operator> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      FILTER NOT EXISTS { ?dimension schema:version ?version . }
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/operator> }
              ?observation ?dimensionIri ?versionedValue .
              BIND(?versionedValue as ?unversionedValue)
            }
          }
        }
    UNION { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/period> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            ?dimension schema:version ?version .
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            ?versionedValue schema:sameAs ?unversionedValue .
          }
        } UNION { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/period> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            FILTER NOT EXISTS { ?dimension schema:version ?version . }
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            BIND(?versionedValue as ?unversionedValue)
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/period> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      ?dimension schema:version ?version .
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/period> }
              ?observation ?dimensionIri ?versionedValue .
              ?versionedValue schema:sameAs ?unversionedValue .
            }
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/period> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      FILTER NOT EXISTS { ?dimension schema:version ?version . }
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/period> }
              ?observation ?dimensionIri ?versionedValue .
              BIND(?versionedValue as ?unversionedValue)
            }
          }
        }
    UNION { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/product> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            ?dimension schema:version ?version .
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            ?versionedValue schema:sameAs ?unversionedValue .
          }
        } UNION { #pragma evaluate on
          SELECT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
            VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/product> }
            <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
            ?dimension sh:path ?dimensionIri .
            FILTER NOT EXISTS { ?dimension schema:version ?version . }
            ?dimension sh:in/rdf:rest*/rdf:first ?versionedValue .
            BIND(?versionedValue as ?unversionedValue)
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/product> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      ?dimension schema:version ?version .
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/product> }
              ?observation ?dimensionIri ?versionedValue .
              ?versionedValue schema:sameAs ?unversionedValue .
            }
          }
        } UNION {
          {
            SELECT DISTINCT ?dimensionIri ?versionedValue ?unversionedValue WHERE {
              { #pragma evaluate on
                SELECT ?observation WHERE {
                  VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/product> }
                      <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationConstraint/sh:property ?dimension .
                      ?dimension sh:path ?dimensionIri .
                      FILTER NOT EXISTS { ?dimension schema:version ?version . }
                      FILTER NOT EXISTS { ?dimension sh:in ?in . }
                  <https://energy.ld.admin.ch/elcom/electricityprice> cube:observationSet/cube:observation ?observation .

                }
              }
              VALUES ?dimensionIri { <https://energy.ld.admin.ch/elcom/electricityprice/dimension/product> }
              ?observation ?dimensionIri ?versionedValue .
              BIND(?versionedValue as ?unversionedValue)
            }
          }
        }
      OPTIONAL { ?versionedValue schema:name ?name_de . FILTER(LANG(?name_de) = "de") }
    OPTIONAL { ?versionedValue schema:name ?name_fr . FILTER(LANG(?name_fr) = "fr") }
    OPTIONAL { ?versionedValue schema:name ?name_it . FILTER(LANG(?name_it) = "it") }
    OPTIONAL { ?versionedValue schema:name ?name_en . FILTER(LANG(?name_en) = "en") }
    OPTIONAL { ?versionedValue schema:name ?name_ . FILTER(LANG(?name_) = "") }
    BIND(COALESCE(?name_de, ?name_fr, ?name_it, ?name_en, ?name_) AS ?name)
      OPTIONAL { ?versionedValue schema:description ?description_de . FILTER(LANG(?description_de) = "de") }
    OPTIONAL { ?versionedValue schema:description ?description_fr . FILTER(LANG(?description_fr) = "fr") }
    OPTIONAL { ?versionedValue schema:description ?description_it . FILTER(LANG(?description_it) = "it") }
    OPTIONAL { ?versionedValue schema:description ?description_en . FILTER(LANG(?description_en) = "en") }
    OPTIONAL { ?versionedValue schema:description ?description_ . FILTER(LANG(?description_) = "") }
    BIND(COALESCE(?description_de, ?description_fr, ?description_it, ?description_en, ?description_) AS ?description)
      OPTIONAL { ?versionedValue schema:alternateName ?alternateName_de . FILTER(LANG(?alternateName_de) = "de") }
    OPTIONAL { ?versionedValue schema:alternateName ?alternateName_fr . FILTER(LANG(?alternateName_fr) = "fr") }
    OPTIONAL { ?versionedValue schema:alternateName ?alternateName_it . FILTER(LANG(?alternateName_it) = "it") }
    OPTIONAL { ?versionedValue schema:alternateName ?alternateName_en . FILTER(LANG(?alternateName_en) = "en") }
    OPTIONAL { ?versionedValue schema:alternateName ?alternateName_ . FILTER(LANG(?alternateName_) = "") }
    BIND(COALESCE(?alternateName_de, ?alternateName_fr, ?alternateName_it, ?alternateName_en, ?alternateName_) AS ?alternateName)
      OPTIONAL { ?versionedValue schema:identifier ?identifier . }
      OPTIONAL { ?versionedValue schema:position ?position . }
      OPTIONAL { ?versionedValue schema:color ?color . }
      OPTIONAL { ?versionedValue geo:hasGeometry ?geometry . }
      OPTIONAL { ?versionedValue schema:latitude ?latitude . }
      OPTIONAL { ?versionedValue schema:longitude ?longitude . }
    }
  `,
  `
    #BENCHMARK: Query 4

    #pragma describe.strategy cbd
    #pragma join.hash off

    DESCRIBE <https://energy.ld.admin.ch/elcom/electricityprice/shape>
  `,
  `
    #BENCHMARK: Query 5

    #pragma describe.strategy cbd
    #pragma join.hash off

    DESCRIBE ?subject WHERE {
      {
        BIND(<https://energy.ld.admin.ch/elcom/electricityprice> AS ?subject)
      }
      UNION
      {
        ?subject <http://schema.org/hasPart> <https://energy.ld.admin.ch/elcom/electricityprice> .
      }
    }
  `
];

export default () => {
  const runId = `u${exec.vu.idInTest}-nb${id++}`
  console.log(`Request #${runId}`);

  const query = queries[id % queries.length];

  const res = http.post(endpoint, {
    query,
  }, {
    headers: { 'Accept-Encoding': 'gzip' },
  });

  check(res, {
    'is status 200': (r) => r.status === 200,
  });
};
