function Impressum() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-screen-md mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Impressum der Junior Company EasyCharge
      </h2>
      <div className="text-left space-y-4">
        <div>
          <strong>Adresse:</strong> Technikerstraße 1-5, 2340 Mödling
        </div>

        <div>
          <strong>Kontakt:</strong>
          <br />
          Telefon:{" "}
          <a
            href={`tel:+4369917131997`}
            className="text-blue-600 hover:text-orange-300"
          >
            +43 699 1713 1997
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:office@easycharge-jc.com"
            className="text-blue-600 hover:underline"
          >
            office@easycharge-jc.com
          </a>
        </div>

        <p>
          <strong>Geschäftsführer:</strong> David Weninger{" "}
        </p>

        <p>
          {/* <strong>Firmenbuch:</strong> ??? <br />
          <strong>Umsatzsteuer-Identifikationsnummer:</strong> ??? <br /> */}
          <strong>Aufsichtsbehörde:</strong> <br /> Junior Achievement Austria
          <br /> Unternehmerische Praxis- und Kompetenzbildung
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt:</strong> EasyCharge Junior
          Company
        </p>

        <p>
          <strong>Haftungshinweis:</strong> Trotz sorgfältiger inhaltlicher
          Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren
          Betreiber verantwortlich.
        </p>

        <p>
          <strong>Urheberrecht:</strong>
          <br />
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>

        <p>
          <strong>Datenschutz:</strong>
          <br />
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Weitere Informationen zum
          Datenschutz finden Sie in unserer Datenschutzerklärung. Diese Webseite
          wurde erstellt von EasyCharge. Bei Fragen oder Anregungen können Sie
          uns gerne kontaktieren.
        </p>
      </div>
    </div>
  );
}

export default Impressum;
