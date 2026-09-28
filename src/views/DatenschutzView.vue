<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="datenschutz-page">
    <button type="button" class="zurueck-button" @click="router.push('/')">
      ← Zurück
    </button>

    <div class="datenschutz-header">
      <p class="datenschutz-klein">Rechtliches</p>
      <h1>Datenschutz</h1>
    </div>

    <div class="datenschutz-box">
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
        Nachfolgend informieren wir Sie gemäß Art. 13 und 14 der
        Datenschutz-Grundverordnung (DSGVO) darüber, welche personenbezogenen
        Daten wir beim Besuch dieser Website und bei der Nutzung unserer
        Angebote verarbeiten, zu welchem Zweck und auf welcher Rechtsgrundlage
        dies geschieht und welche Rechte Ihnen zustehen.
      </p>

      <h2>1. Verantwortlicher</h2>

      <p>Verantwortlicher im Sinne der DSGVO ist:</p>

      <p>
        Möhle &amp; Braker Datentechnik GbR<br />
        Bahnhofstraße 24<br />
        24647 Wasbek<br />
        Tel.: +49 4321 602097<br />
        Fax: +49 4321 602098<br />
        E-Mail:
        <a href="mailto:info@mbd-team.de">info@mbd-team.de</a>
      </p>

      <h2>2. Datenschutzbeauftragter</h2>

      <p>
        Unseren Datenschutzbeauftragten erreichen Sie postalisch unter der oben
        genannten Anschrift (Stichwort „Datenschutz") sowie per E-Mail unter
        <a href="mailto:Datenschutz@MBD-Team.de"> Datenschutz@MBD-Team.de </a>.
      </p>

      <h2>3. Aufruf der Website – Server-Logfiles</h2>

      <p>
        Bei jedem Aufruf unserer Website werden durch den Browser Ihres
        Endgeräts automatisch Informationen an den Server unserer Website
        gesendet und vorübergehend in sogenannten Logfiles gespeichert. Erfasst
        werden dabei die IP-Adresse des anfragenden Geräts, Datum und Uhrzeit
        des Zugriffs, der Browsertyp und die Browserversion, das verwendete
        Betriebssystem sowie die aufgerufenen Seiten. Diese Daten dienen der
        technischen Bereitstellung, der Stabilität und der Sicherheit der
        Website. Ein Rückschluss auf Ihre Person ist uns hierbei im Regelfall
        nicht möglich und nicht beabsichtigt.
      </p>

      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
        an einem sicheren und funktionsfähigen Betrieb der Website). Die
        Logfiles werden nach spätestens 30 Tagen gelöscht, sofern sie nicht zur
        Aufklärung eines konkreten Sicherheitsvorfalls benötigt werden.
      </p>

      <h2>4. Cookies und lokale Speicherung</h2>

      <p>
        Wir setzen ausschließlich technisch notwendige Cookies ein, die für den
        Betrieb der Website erforderlich sind – insbesondere ein Sitzungs-Cookie
        sowie ein Cookie zum Schutz vor Cross-Site-Request-Forgery (XSRF-TOKEN).
        Diese Cookies enthalten keine Tracking-Informationen und werden nicht zu
        Analyse- oder Marketingzwecken verwendet. Rechtsgrundlage für das
        Speichern dieser notwendigen Informationen ist § 25 Abs. 2 TDDDG in
        Verbindung mit Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <p>
        Zur Freischaltung externer Inhalte (siehe Google Maps, Ziffer 9)
        speichern wir Ihre Entscheidung zusätzlich lokal in Ihrem Browser (Local
        Storage, Schlüssel „mbd-consent-v1"). Dabei wird lediglich gespeichert,
        ob Sie externe Inhalte zugelassen oder abgelehnt haben; es werden keine
        personenbezogenen Daten an uns oder Dritte übertragen. Sie können diese
        Speicherung jederzeit über die Einstellungen Ihres Browsers löschen.
      </p>

      <h2>5. Reichweitenmessung (eigene, cookiefreie Zählung)</h2>

      <p>
        Wir messen die Nutzung unserer Website selbst und ohne Dienste Dritter.
        Es werden dabei <strong>keine Cookies gesetzt</strong> und keine
        Informationen auf Ihrem Endgerät gespeichert oder ausgelesen; § 25 TDDDG
        ist daher nicht einschlägig. Es findet keine Übermittlung an Dritte
        statt.
      </p>

      <p>
        Beim Aufruf einer Seite und beim Klick auf eine hervorgehobene
        Schaltfläche übermitteln wir an unseren eigenen Server: die aufgerufene
        Seite ohne Parameter, gegebenenfalls die Bezeichnung der Schaltfläche,
        den Host einer verweisenden Seite (etwa „google.com") sowie eine grobe
        Einordnung des Geräts als Mobiltelefon, Tablet oder Computer.
      </p>

      <p>
        Um Besuche voneinander unterscheiden zu können, bilden wir aus Ihrer
        IP-Adresse, der Browserkennung, der aufgerufenen Website und einem
        zufälligen, täglich neu erzeugten Wert eine nicht umkehrbare Prüfsumme.
        <strong>
          Die IP-Adresse und die Browserkennung selbst werden nicht gespeichert.
        </strong>
        Der Zufallswert wird nach 48 Stunden gelöscht; danach lässt sich die
        Prüfsumme auch uns selbst keiner Person mehr zuordnen. Die Prüfsumme
        selbst löschen wir spätestens nach 60 Tagen, die reine Aufrufzählung
        bleibt anschließend ohne jeden Personenbezug bestehen.
      </p>

      <p>
        Da der Zufallswert täglich wechselt, ist eine Wiedererkennung über einen
        Tag hinaus ausgeschlossen. Seitenübergreifende Nutzungsprofile entstehen
        nicht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an einer bedarfsgerechten Gestaltung und der statistischen
        Auswertung unserer Website).
      </p>

      <p>
        Übermittelt Ihr Browser die Einstellung „Do Not Track" (DNT),
        unterbleibt die Zählung vollständig.
      </p>

      <h2>6. Kontaktformular</h2>

      <p>
        Wenn Sie uns über das Kontaktformular eine Nachricht senden, verarbeiten
        wir die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, optional
        Telefonnummer und Betreff sowie Ihre Nachricht), um Ihre Anfrage zu
        bearbeiten und zu beantworten. Ihre Nachricht wird uns per E-Mail
        zugestellt.
      </p>

      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf
        den Abschluss oder die Durchführung eines Vertrags gerichtet ist, im
        Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
        Beantwortung von Anfragen). Die Daten werden gelöscht, sobald Ihre
        Anfrage abschließend bearbeitet ist und keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>7. Bewerbungen über das Karriereformular</h2>

      <p>
        Über unser Karriereformular können Sie sich bei uns bewerben. Wir
        verarbeiten dabei die von Ihnen angegebenen Daten (Vor- und Nachname,
        E-Mail-Adresse, optional Telefonnummer und Nachricht) sowie die von
        Ihnen hochgeladenen Bewerbungsunterlagen (Lebenslauf sowie optional
        Anschreiben und Zeugnisse). Diese Unterlagen werden uns per E-Mail
        zugestellt und zur Durchführung des Bewerbungsverfahrens verarbeitet.
      </p>

      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO in Verbindung mit § 26
        Abs. 1 BDSG (Verarbeitung zur Entscheidung über die Begründung eines
        Beschäftigungsverhältnisses). Kommt kein Beschäftigungsverhältnis
        zustande, löschen wir Ihre Bewerbungsunterlagen spätestens sechs Monate
        nach Abschluss des Verfahrens, sofern Sie keiner längeren Speicherung
        zugestimmt haben und keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>

      <h2>8. Website-Check (Google PageSpeed Insights)</h2>

      <p>
        Auf der Seite „Website-Check" bieten wir ein kostenloses
        Analyse-Werkzeug an. Geben Sie dort eine Web-Adresse (URL) ein,
        ermitteln wir für diese Seite technische Kennzahlen zu
        Ladegeschwindigkeit, Suchmaschinen-Auffindbarkeit, Barrierefreiheit und
        eingebundenen Drittdiensten.
      </p>

      <p>
        Zur Messung der Ladegeschwindigkeit nutzen wir die Schnittstelle
        „PageSpeed Insights" von Google (Google Ireland Ltd., Gordon House,
        Barrow Street, Dublin 4, Irland). Dabei wird ausschließlich die von
        Ihnen eingegebene URL an Google übermittelt. Diese Übermittlung erfolgt
        serverseitig durch uns; Ihre IP-Adresse wird dabei nicht an Google
        übertragen. Die übrigen Prüfungen – einschließlich des
        Datenschutz-Checks auf eingebundenen Drittdiensten – führen wir auf
        unseren eigenen Systemen durch, ohne Daten an Dritte weiterzugeben.
      </p>

      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse,
        Ihnen das angeforderte Analyse-Ergebnis bereitzustellen). Da Google
        Daten auch in den USA verarbeiten kann, stützt sich die Übermittlung auf
        die EU-Standardvertragsklauseln bzw. das EU-US Data Privacy Framework.
        Fordern Sie im Anschluss ein Angebot an, verarbeiten wir die angegebenen
        Kontaktdaten (Name, E-Mail-Adresse, optional Telefonnummer) sowie das
        Prüfergebnis ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1
        lit. b DSGVO) und geben sie nicht an Google weiter.
      </p>

      <h2>9. Google Maps</h2>

      <p>
        Auf unserer Kontaktseite binden wir Kartenmaterial des Dienstes Google
        Maps (Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4,
        Irland) ein. Die Karte wird erst geladen, nachdem Sie ausdrücklich
        zugestimmt haben („Click-to-Load"). Vor Ihrer Zustimmung wird keine
        Verbindung zu Google aufgebaut und es werden keine Daten an Google
        übertragen.
      </p>

      <p>
        Erteilen Sie Ihre Einwilligung, werden beim Laden der Karte Ihre
        IP-Adresse und weitere Verbindungsdaten an Google übermittelt; Google
        kann dabei Cookies setzen. Rechtsgrundlage ist Ihre Einwilligung nach
        Art. 6 Abs. 1 lit. a DSGVO, die Sie jederzeit mit Wirkung für die
        Zukunft widerrufen können (z. B. durch Löschen der lokalen Speicherung
        in Ihrem Browser). Da Google Daten auch in den USA verarbeiten kann,
        stützt sich die Übermittlung auf die EU-Standardvertragsklauseln bzw.
        das EU-US Data Privacy Framework.
      </p>

      <h2>10. Schriftarten</h2>

      <p>
        Die auf dieser Website verwendeten Schriftarten werden lokal von unserem
        eigenen Server ausgeliefert. Es besteht keine Verbindung zu
        Schrift-Diensten Dritter (z. B. Google Fonts); es werden hierfür keine
        Daten an Dritte übertragen.
      </p>

      <h2>11. Hosting und E-Mail-Versand</h2>

      <p>
        Unsere Website wird bei der Hetzner Online GmbH, Industriestraße 25,
        91710 Gunzenhausen, Deutschland, gehostet. Der Empfang und Versand von
        E-Mails (z. B. aus dem Kontakt- und Karriereformular) erfolgt über
        Microsoft 365 (Microsoft Ireland Operations Ltd., Irland). Mit
        Dienstleistern, die in unserem Auftrag personenbezogene Daten
        verarbeiten, bestehen Vereinbarungen zur Auftragsverarbeitung nach Art.
        28 DSGVO. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an einem sicheren und effizienten Betrieb).
      </p>

      <h2>12. Ihre Rechte</h2>

      <p>
        Ihnen stehen nach der DSGVO die folgenden Rechte zu: das Recht auf
        Auskunft (Art. 15), auf Berichtigung (Art. 16), auf Löschung (Art. 17),
        auf Einschränkung der Verarbeitung (Art. 18), auf Datenübertragbarkeit
        (Art. 20) sowie das Recht auf Widerspruch gegen die Verarbeitung (Art.
        21). Soweit die Verarbeitung auf Ihrer Einwilligung beruht, können Sie
        diese jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3
        DSGVO). Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die
        unter Ziffer 1 oder 2 genannten Kontaktdaten.
      </p>

      <h2>13. Beschwerderecht bei der Aufsichtsbehörde</h2>

      <p>
        Unbeschadet anderweitiger Rechtsbehelfe haben Sie das Recht, sich bei
        einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht
        sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die
        DSGVO verstößt. Die für uns zuständige Aufsichtsbehörde ist:
      </p>

      <p>
        <strong>
          Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)
        </strong>
        <br />
        Holstenstraße 98<br />
        24103 Kiel
      </p>

      <h2>14. Aktualität und Änderung dieser Datenschutzerklärung</h2>

      <p>
        Diese Datenschutzerklärung hat den Stand
        <strong>September 2026</strong>. Durch die Weiterentwicklung unserer
        Website und unserer Angebote oder aufgrund geänderter gesetzlicher bzw.
        behördlicher Vorgaben kann es notwendig werden, diese
        Datenschutzerklärung anzupassen. Die jeweils aktuelle Fassung können Sie
        jederzeit auf dieser Seite abrufen.
      </p>
      <h2>15.Bilder</h2>
      <p>
        bilder:
        https://pixabay.com/photos/wood-boards-texture-wooden-brown-2045379/
      </p>
      <p>Ki generierte Bilder</p>
    </div>
  </div>
</template>

<style scoped>
.datenschutz-page {
  width: 100%;
  min-height: 100vh;
  padding: 120px 5% 100px;

  background:
    linear-gradient(rgba(50, 27, 20, 0.72), rgba(50, 27, 20, 0.82)),
    url("/bilder/dunklesholz.jpg");

  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-sizing: border-box;
}

.datenschutz-header {
  text-align: center;
  margin-bottom: 45px;
}

.datenschutz-klein {
  font-family: "Allura", cursive;
  color: var(--cream);
  font-size: clamp(28px, 4vw, 48px);
  line-height: 1;
  margin-bottom: 8px;
}

.datenschutz-header h1 {
  margin: 0;
  font-family: "Remark", sans-serif;
  color: var(--cream);
  font-size: clamp(28px, 4vw, 52px);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.datenschutz-box {
  width: min(100%, 1000px);
  margin: 0 auto;
  padding: clamp(28px, 5vw, 60px);
  box-sizing: border-box;
  background: rgba(246, 239, 228, 0.94);
  border: 1px solid rgba(246, 239, 228, 0.5);
  color: var(--beige-dark);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.datenschutz-box h2 {
  margin-top: 0;
  margin-bottom: 18px;
  font-family: "Remark", sans-serif;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: normal;
  color: var(--beige-dark);
}

.datenschutz-box h2:not(:first-child) {
  margin-top: 42px;
}

.datenschutz-box p {
  margin: 0 0 18px;
  font-family: "Remark", sans-serif;
  font-size: clamp(16px, 1.2vw, 17px);
  line-height: 1.7;
  color: var(--beige-dark);
}

.datenschutz-box ul,
.datenschutz-box ol {
  margin: 0 0 20px;
  padding-left: 25px;
  font-family: "Remark", sans-serif;
  font-size: clamp(16px, 1.2vw, 17px);
  line-height: 1.7;
}

.datenschutz-box a {
  color: var(--light-brown);
  text-decoration: underline;
}

.datenschutz-box a:hover {
  opacity: 0.65;
}

.zurueck-button {
  position: fixed;
  top: 85px;
  left: 6%;
  padding: 11px 20px;
  background: transparent;
  color: var(--cream);
  border: 1px solid rgba(246, 239, 228, 0.35);
  font-family: "Remark", sans-serif;
  font-size: 16px;
  cursor: pointer;
  z-index: 20;
}

.zurueck-button:hover {
  background: var(--cream);
  color: var(--bar-brown);
  transform: translateX(-3px);
}

@media (max-width: 700px) {
  .datenschutz-page {
    padding: 100px 5% 90px;
    background-attachment: scroll;
  }

  .datenschutz-header {
    margin-bottom: 30px;
  }

  .datenschutz-box {
    padding: 25px 20px;
  }
}

@media (max-width: 420px) {
  .zurueck-button {
    top: 70px;
    left: 6%;
    padding: 9px 15px;
    font-size: 16px;
  }
}
</style>
