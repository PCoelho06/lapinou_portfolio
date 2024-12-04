<template>
  <main class="mx-12 my-8">
    <div class="legal-mentions">
      <div class="title">
        <h1 class="text-center text-2xl font-bold">Mentions légales</h1>
        <p class="text-xs text-center italic">Mises à jour le 16/01/2024</p>
      </div>

      <h2 class="text-xl my-2 font-semibold">1 - Édition du site</h2>
      <p>En vertu de <strong class="font-bold"> l'article 6 de la loi n° 2004-575 du 21 juin 2004</strong> pour la
        confiance dans
        l'économie numérique, il est précisé aux utilisateurs du site internet <RouterLink :to="{ name: 'home' }"
          class="underline hover:text-blue-800">
          Lapinou.tech</RouterLink> l'identité des différents intervenants dans le cadre de
        sa réalisation et de son suivi:</p>
      <ul class="list-disc ms-4 my-2">
        <li>Propriétaire du site : Lapinou.tech - Contact : <a href="mailto:p.coelho@lapinou.tech"
            class="underline hover:text-blue-800">p.coelho@lapinou.tech</a> 0770275724 - Adresse : 33 Boulevard Jean
          Behra
          06100 Nice.</li>
        <li>Identification de l'entreprise : entreprise individuelle Lapinou.tech au capital social de 0 € - SIREN :
          979756962 - Adresse postale : 33 Boulevard Jean Behra 06100 Nice</li>
        <li>Directeur de la publication : Pierre Da Silva Coelho - Contact : <strong
            class="font-bold">p.coelho@lapinou.tech</strong>.
        </li>
        <li>Hébergeur : Hostinger 61 Lordou Vironos Street, 6023 Larnaca, Chypre <a
            href="https://www.hostinger.fr/contact" class="underline hover:text-blue-800"
            target="_blank">https://www.hostinger.fr/contact</a></li>
        <li>Délégué à la protection des données : Pierre Da Silva Coelho - <strong
            class="font-bold">p.coelho@lapinou.tech</strong></li>
      </ul>

      <h2 class="text-xl my-2 font-semibold">2 - Propriété intellectuelle et contrefaçons.</h2>
      <p>Lapinou.tech est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les
        éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos,
        architecture, icônes et sons.</p>

      <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du
        site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de
        Lapinou.tech.</p>

      <p>Toute exploitation non autorisée du site ou de l'un des éléments quelconque qu'il contient sera considérée
        comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et
        suivants du Code de Propriété Intellectuelle.</p>

      <h2 class="text-xl my-2 font-semibold">3 - Limitations de responsabilité.</h2>
      <p>Lapinou.tech ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de
        l'utilisateur, lors de l'accès au site <RouterLink :to="{ name: 'home' }" class="underline hover:text-blue-800">
          Lapinou.tech</RouterLink>.</p>

      <p>Lapinou.tech décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et
        contenus présents sur <RouterLink :to="{ name: 'home' }" class="underline hover:text-blue-800">
          Lapinou.tech</RouterLink>.</p>

      <p>Lapinou.tech s'engage à sécuriser au mieux le site <RouterLink :to="{ name: 'home' }"
          class="underline hover:text-blue-800">
          Lapinou.tech</RouterLink>, cependant
        sa responsabilité
        ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
      </p>

      <p>Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Lapinou.tech
        se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui
        contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection
        des données.</p>

      <p>Le cas échéant, Lapinou.tech se réserve également la possibilité de mettre en cause la responsabilité civile
        et/ou pénale de l'utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou
        pornographique, quel que soit le support utilisé (texte, photographie …).</p>

      <h2 class="text-xl my-2 font-semibold">4 - CNIL et gestion des données personnelles.</h2>
      <p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l'utilisateur du site
        <RouterLink :to="{ name: 'home' }" class="underline hover:text-blue-800">
          Lapinou.tech</RouterLink> dispose d'un droit d'accès, de modification et de suppression
        des informations
        collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : Pierre Da
        Silva Coelho - <a href="mailto:p.coelho@lapinou.tech"
          class="underline hover:text-blue-800">p.coelho@lapinou.tech</a>.
      </p>

      <p>Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité,
        destinataire...), lisez notre <RouterLink :to="{ name: 'privacy' }" class="underline hover:text-blue-800">
          politique de confidentialité</RouterLink>.</p>

      <h2 class="text-xl my-2 font-semibold">5 - Liens hypertextes et cookies</h2>
      <p>Le site <RouterLink :to="{ name: 'home' }" class="underline hover:text-blue-800">
          Lapinou.tech</RouterLink> contient des liens hypertextes vers d'autres sites et
        dégage toute
        responsabilité à propos de ces liens externes ou des liens créés par d'autres sites vers
        <strong class="font-bold">lapinou.tech</strong>.
      </p>

      <p>La navigation sur le site <RouterLink :to="{ name: 'home' }" class="underline hover:text-blue-800">
          Lapinou.tech</RouterLink> est susceptible de provoquer
        l'installation de
        cookie(s) sur l'ordinateur de l'utilisateur.</p>

      <p>Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d'un
        utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par
        exemple.</p>

      <p>Vous avez la possibilité d'accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur.
        Aucun cookie ne sera déposé sans votre consentement.</p>

      <p>Les cookies sont enregistrés pour une durée maximale de 12 mois.</p>

      <p>Pour plus d'informations sur la façon dont nous faisons usage des cookies, lisez notre <RouterLink
          :to="{ name: 'privacy' }" class="underline hover:text-blue-800">
          politique de confidentialité</RouterLink>
      </p>

      <h2 class="text-xl my-2 font-semibold">6 - Droit applicable et attribution de juridiction.</h2>
      <p>Tout litige en relation avec l'utilisation du site <RouterLink :to="{ name: 'home' }"
          class="underline hover:text-blue-800">
          Lapinou.tech</RouterLink> est
        soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de
        juridiction aux tribunaux compétents de Nice.</p>
    </div>
  </main>
</template>
