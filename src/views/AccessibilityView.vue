<template>
  <main class="mx-12 my-8">
    <div class="legal-mentions">
      <div class="title">
        <h1 class="text-center text-2xl font-bold">Déclaration d'accessibilité</h1>
        <p class="text-xs text-center italic">Mises à jour le 17/01/2024</p>
      </div>

      <p><strong class="font-bold">Lapinou.tech</strong> s'engage à rendre son site internet conformément à <strong
          class="font-bold">l'article 47 de la loi
          n°2005-102 du 11 février 2005</strong>.</p>
      <p>À cette fin, elle met en œuvre la stratégie et les actions suivantes :</p>
      <ul class="list-disc ms-4 my-2">
        <li>Mise en conformité avec le référentiel général d'amélioration de l'accessibilité (RGAA), version 4</li>
        <li>Utilisation d'outils d'évaluation de l'accessibilité</li>
      </ul>
      <p>Cette déclaration d'accessibilité s'applique à <RouterLink :to="{ name: 'home' }"
          class="underline hover:text-blue-800">
          Lapinou.tech</RouterLink>.</p>
      <h2 class="text-xl my-2 font-semibold">Établissement de cette déclaration d'accessibilité</h2>
      <p>Cette déclaration a été établie le <strong class="font-bold">17/01/2024</strong>. Elle a été mise à jour le
        <strong class="font-bold">23/01/2024</strong>.
      </p>
      <h3 class="text-lg my-1 font-medium">Technologies utilisées pour la réalisation de <strong
          class="font-bold">Lapinou.tech</strong></h3>
      <ul class="list-disc ms-4 my-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>PHP</li>
      </ul>
      <h3 class="text-lg my-1 font-medium">Outils pour évaluer l'accessibilité</h3>
      <ul class="list-disc ms-4 my-2">
        <li>WAVE</li>
      </ul>
      <h3 class="text-lg my-1 font-medium">Pages du site ayant fait l'objet de la vérification de conformité</h3>
      <ol class="list-decimal ms-4 my-2">
        <li>
          <RouterLink :to="{ name: 'home' }" class="underline hover:text-blue-800">page d'accueil</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'about' }" class="underline hover:text-blue-800">page de présentation</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'projects' }" class="underline hover:text-blue-800">page des projets</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'contact' }" class="underline hover:text-blue-800">page de contact</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'terms' }" class="underline hover:text-blue-800">page mentions légales</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'privacy' }" class="underline hover:text-blue-800">page politique de confidentialité
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'accessibility' }" class="underline hover:text-blue-800">page accessibilité
          </RouterLink>
        </li>
      </ol>
      <h2 class="text-xl my-2 font-semibold">Retour d'information et contact</h2>
      <p>Si vous n'arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le responsable de
        <strong class="font-bold">Lapinou.tech</strong> pour être orienté vers une alternative accessible ou obtenir le
        contenu sous une autre forme.
      </p>
      <ul class="list-disc ms-4 my-2">
        <li>
          <RouterLink :to="{ name: 'contact' }" class="underline hover:text-blue-800">Envoyer un message</RouterLink>
        </li>
        <li>
          Le responsable à l'accessibilité peut être contacté de la manière suivante :
          <ul class="list-disc ms-4 my-2">
            <li>Par courrier à l'adresse : 33 Boulevard Jean Behra 06100 Nice ;</li>
            <li>Par mail : <a href="mailto:p.coelho@lapinou.tech"
                class="underline hover:text-blue-800">p.coelho@lapinou.tech</a>.</li>
          </ul>
        </li>
      </ul>
      <h2 class="text-xl my-2 font-semibold">Voies de recours</h2>
      <p>Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un contenu ou une fonctionnalité du
        site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse de notre part, vous êtes en
        droit de faire parvenir vos doléances ou une demande de saisine au Défenseur des droits.</p>
      <p>Plusieurs moyens sont à votre disposition :</p>
      <ul class="list-disc ms-4 my-2">
        <li><a href="https://formulaire.defenseurdesdroits.fr" class="underline hover:text-blue-800"
            target="_blank">Écrire un message au Défenseur des
            droits</a></li>
        <li><a href="https://www.defenseurdesdroits.fr/saisir/delegues" class="underline hover:text-blue-800"
            target="_blank">Contacter le délégué du
            Défenseur des droits dans votre région</a></li>
        <li>Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre)<br>
          <div class="border border-slate-800 mx-auto my-2 max-w-fit p-4">
            Défenseur des droits<br>
            Libre réponse 71120<br>
            75342 Paris CEDEX 07
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
