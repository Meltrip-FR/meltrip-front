import store from "@/redux/store"

const CGU = () => {
  let { auth } = store.getState()

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-center font-bold text-5xl mb-5">
        Condition générale d’utilisation
      </h1>
      <h6 className="font-bold text-[#757575] mt-5 text-2xl">
        En vigueur au 01/05/2022
      </h6>
      <div className="container mx-auto mt-10 w-[100vh]">
        <p className="mb-5">
          Les présentes conditions générales d{"'"}utilisation (dites «
          <b>CGU</b> ») ont pour objet l{"'"}encadrement juridique des modalités
          de mise à disposition du site et des services par Meltrip et de
          définir les conditions d’accès et d’utilisation des services par «
          <b>l{"'"}Utilisateur</b>
          ».
        </p>
        <p>
          Toute inscription ou utilisation du site implique l{"'"}acceptation
          sans aucune réserve ni restriction des présentes CGU par
          l’utilisateur. Lors de l{"'"}inscription sur le site via le Formulaire
          d’inscription, chaque utilisateur accepte expressément les présentes
          CGU en cochant la case précédant le texte suivant : « Je reconnais
          avoir lu et compris les CGU et je les accepte ».
        </p>
        <p>
          En cas de non-acceptation des CGU stipulées dans le présent contrat, l
          {"'"}
          Utilisateur se doit de renoncer à l{"'"}
          accès des services proposés par le site.
        </p>
        <p>
          <b>
            <a
              href="https://meltrip.fr"
              className="text-meltrip-primary hover:underline"
            >
              https://meltrip.fr
            </a>
          </b>{" "}
          se réserve le droit de modifier unilatéralement et à tout moment le
          contenu des présentes CGU.
        </p>
        <h3 className="font-bold text-xl mt-5 mb-5">
          Article 1 : Les mentions légales
        </h3>
        <p className="mb-5">
          L’édition et la direction de la publication du site
          <b>
            {" "}
            <a
              href="https://meltrip.fr"
              className="text-meltrip-primary hover:underline"
            >
              https://meltrip.fr
            </a>{" "}
          </b>
          est assurée par Louise Landemaine, domicilié sur Paris. <br />
          Informations de contact :
          <ul className="ml-5">
            <li>Numéro de téléphone est 0632071064</li>
            <li> Adresse e-mail : louise@meltrip.fr.</li>
          </ul>
        </p>
        <p className="mt-5">
          L{"'"}hébergeur du site{" "}
          <a
            href="https://meltrip.fr"
            className="text-meltrip-primary hover:underline"
          >
            https://meltrip.fr
          </a>{" "}
          est la société ALWAYSDATA, dont le siège social est situé au 91 rue du
          Faubourg Saint Honoré, 75008, Paris, avec le numéro de téléphone : 01
          84 16 23 40.
        </p>
        <h3 className="font-bold text-xl mt-5 mb-5">
          Article 2 : Accès au site
        </h3>
        <p>
          Le site{" "}
          <b>
            <a
              href="https://meltrip.fr"
              className="text-meltrip-primary hover:underline"
            >
              https://meltrip.fr
            </a>
          </b>{" "}
          permet à l{"'"}Utilisateur un accès gratuit aux services suivants :{" "}
          <br />
          Le site internet propose les services suivants : <br />
          <ul className="ml-5  mb-5">
            <li>
              Organisation de séminaire selon le besoin d’une entreprise
              (séminaire d’intégration, de management, de team building, de
              commerce et de formation) et selon la personnalité de tous les
              collaborateurs ;
            </li>
            <li>Proposition de séminaires prêts-à-l ’emploi non modifiable </li>
          </ul>
        </p>
        <p>
          Le site est accessible gratuitement en tout lieu à tout Utilisateur
          ayant un accès à Internet. Tous les frais supportés <br /> par l{"'"}
          Utilisateur pour accéder au service (matériel informatique, logiciels,
          connexion Internet, etc.) sont à sa charge.
        </p>
        <p>
          L’Utilisateur non membre n{"'"}a pas accès aux services réservés. Pour
          cela, il doit s’inscrire en remplissant le formulaire. En acceptant de
          s’inscrire aux services réservés, l’Utilisateur membre s’engage à
          fournir des informations sincères et exactes concernant son état civil
          et ses coordonnées, notamment son adresse email. <br /> Pour accéder
          aux services, l’Utilisateur doit ensuite s{"'"}identifier à l{"'"}aide
          de son identifiant et de son mot de passe qui lui seront communiqués
          après son inscription. <br />
          Tout Utilisateur membre régulièrement inscrit pourra également
          solliciter sa désinscription en se rendant à la page dédiée sur son
          espace personnel. Celle-ci sera effective dans un délai raisonnable.{" "}
          <br /> Tout événement dû à un cas de force majeure ayant pour
          conséquence un dysfonctionnement du site ou serveur et sous réserve de
          toute interruption ou modification en cas de maintenance, n{"'"}engage
          pas la responsabilité de{" "}
          <a
            href="https://meltrip.fr"
            className="text-meltrip-primary hover:underline"
          >
            https://meltrip.fr
          </a>
          . Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à
          l’éditeur de toute interruption ou suspension de service, même sans
          préavis. <br /> L{"'"}
          Utilisateur a la possibilité de contacter le site par messagerie
          électronique à l’adresse email de l’éditeur communiqué à l’ARTICLE 1.
        </p>
        <h3 className="font-bold text-xl mt-5 mb-5">
          ARTICLE 3 : Collecte des données
        </h3>
        <p>
          Le site assure à l{"'"}Utilisateur une collecte et un traitement d
          {"'"}
          informations personnelles dans le respect de la vie privée
          conformément à la loi n°78-17 du 6 janvier 1978 relative à l{"'"}
          informatique, aux fichiers et aux libertés. <br /> En vertu de la loi
          Informatique et Libertés, en date du 6 janvier 1978, l{"'"}Utilisateur
          dispose d{"'"}un droit d{"'"}accès, de rectification, de suppression
          et d{"'"}opposition de ses données personnelles. L{"'"}Utilisateur
          exerce ce droit : par mail à l{"'"}adresse email myacount@meltrip.fr
        </p>
        <h3 className="font-bold text-xl mt-5 mb-5">
          ARTICLE 4 : Propriété intellectuelle
        </h3>
        <p className="">
          Les marques, logos, signes ainsi que tous les contenus du site
          (textes, images, son…) font l{"'"}objet d{"'"}une protection par le
          Code de la propriété intellectuelle et plus particulièrement par le
          droit d{"'"}
          auteur. <br /> <br /> L{"'"}Utilisateur doit solliciter l{"'"}
          autorisation préalable du site pour toute reproduction, publication,
          copie des différents contenus. Il s{"'"}engage à une utilisation des
          contenus du site dans un cadre strictement privé, toute utilisation à
          des fins commerciales et publicitaires est strictement interdite.{" "}
          <br /> Toute représentation totale ou partielle de ce site par quelque
          procédé que ce soit, sans l’autorisation expresse de l’exploitant du
          site Internet, constituerait une contrefaçon sanctionnée par l’article
          L 335-2 et suivants du Code de la propriété intellectuelle. <br /> Il
          est rappelé conformément à l’article L122-5 du Code de propriété
          intellectuelle que l’Utilisateur qui reproduit, copie ou publie le
          contenu protégé doit citer l’auteur et sa source.
        </p>
        <h3 className="font-bold text-xl mt-5 mb-5">
          ARTICLE 5 : Responsabilité
        </h3>
        {auth.login ? (
          <p>
            Les sources des informations diffusées sur le site
            <a
              href="https://meltrip.fr"
              className="text-meltrip-primary hover:underline"
            >
              https://meltrip.fr
            </a>{" "}
            sont réputées fiables mais le site ne garantit pas qu’il soit exempt
            de défauts, d’erreurs ou d’omissions. <br /> Les informations
            communiquées sont présentées à titre indicatif et général sans
            valeur contractuelle. Malgré des mises à jour régulières, le site{" "}
            <a
              href="https://meltrip.fr"
              className="text-meltrip-primary hover:underline"
            >
              https://meltrip.fr
            </a>{" "}
            ne peut être tenu responsable de la modification des dispositions
            administratives et juridiques survenant après la publication. De
            même, le site ne peut être tenue responsable de l’utilisation et de
            l’interprétation de l’information contenue dans ce site. <br /> L
            {"'"}
            Utilisateur s{"'"}assure de garder son mot de passe secret. Toute
            divulgation du mot de passe, quelle que soit sa forme, est
            interdite. Il assume les risques liés à l{"'"}utilisation de son
            identifiant et mot de passe. Le site décline toute responsabilité.{" "}
            <br /> Le site{" "}
            <a
              href="https://meltrip.fr"
              className="text-meltrip-primary hover:underline"
            >
              https://meltrip.fr
            </a>{" "}
            ne peut être tenu pour responsable d’éventuels virus qui pourraient
            infecter l’ordinateur ou tout matériel informatique de l’Internaute,
            suite à une utilisation, à l’accès, ou au téléchargement provenant
            de ce site. <br /> La responsabilité du site ne peut être engagée en
            cas de force majeure ou du fait imprévisible et insurmontable d{"'"}
            un tiers.
          </p>
        ) : (
          <p>
            Les sources des informations diffusées sur le site
            <a
              href="https://meltrip.fr"
              className="text-meltrip-primary hover:underline"
            >
              https://meltrip.fr
            </a>{" "}
            sont réputées fiables mais le site ne garantit pas qu’il soit exempt
            de défauts, d’erreurs ou d’omissions.
            <br /> Les informations communiquées sont présentées à titre
            indicatif et général sans valeur contractuelle. Malgré des mises à
            jour régulières, le site{" "}
            <a
              href="https://meltrip.fr"
              className="text-meltrip-primary hover:underline"
            >
              https://meltrip.fr
            </a>{" "}
            ne peut être tenu responsable de la modification des dispositions
            administratives et juridiques survenant après la publication. De
            même, le site ne peut être tenue responsable de l’utilisation et de
            l’interprétation de l’information contenue dans ce site.
            <br /> L{"'"}Utilisateur s{"'"}assure de garder son mot de passe
            secret. Toute divulgation du mot de passe, quelle que soit sa forme,
            est interdite. Il assume les risques liés à l{"'"}
            utilisation de son identifiant et mot de passe. Le site décline
            toute responsabilité.
            <br /> Le site{" "}
            <a
              href="https://meltrip.fr"
              className="text-meltrip-primary hover:underline"
            >
              https://meltrip.fr
            </a>{" "}
            ne peut être tenu pour responsable d’éventuels virus qui pourraient
            infecter l’ordinateur ou tout matériel informatique de l’Internaute,
            suite à une utilisation, à l’accès, ou au téléchargement provenant
            de ce site. <br />
            La responsabilité du site ne peut être engagée en cas de force
            majeure ou du fait imprévisible et insurmontable d{"'"}un tiers.
          </p>
        )}
        <h3 className="font-bold text-xl mt-5 mb-5">
          ARTICLE 6 : Liens hypertextes
        </h3>
        <p>
          Des liens hypertextes peuvent être présents sur le site. L’Utilisateur
          est informé qu’en cliquant sur ces liens, il peut sortir du site
          <a
            href="https://meltrip.fr"
            className="text-meltrip-primary hover:underline"
          >
            https://meltrip.fr
          </a>
          . Ce dernier n’a pas de contrôle sur les pages web sur lesquelles
          aboutissent ces liens et ne saurait, en aucun cas, être responsable de
          leur contenu.
        </p>
        <h3 className="font-bold text-xl mt-5 mb-5">ARTICLE 7 : Les Cookies</h3>
        <p>
          L’Utilisateur est informé que lors de ses visites sur le site, un
          cookie peut s’installer automatiquement sur son logiciel de
          navigation. <br /> Les cookies sont de petits fichiers stockés
          temporairement sur le disque dur de l’ordinateur de l’Utilisateur par
          votre navigateur et qui sont nécessaires à l’utilisation du site
          <a
            href="https://meltrip.fr"
            className="text-meltrip-primary hover:underline"
          >
            https://meltrip.fr
          </a>
          . Les cookies ne contiennent pas d’information personnelle et ne
          peuvent pas être utilisés pour identifier quelqu’un. Un cookie
          contient un identifiant unique, généré aléatoirement et donc anonyme.
          Certains cookies expirent à la fin de la visite de l’Utilisateur,
          d’autres restent. <br />
          L’information contenue dans les cookies est utilisée pour améliorer le
          site{" "}
          <a
            href="https://meltrip.fr"
            className="text-meltrip-primary hover:underline"
          >
            https://meltrip.fr
          </a>
          . En naviguant sur le site, L’Utilisateur les accepte. <br />{" "}
          L’Utilisateur doit toutefois donner son consentement quant à
          l’utilisation de certains cookies. <br /> À défaut d’acceptation,
          l’Utilisateur est informé que certaines fonctionnalités ou pages
          risquent de lui être refusées. L’Utilisateur pourra désactiver ces
          cookies par l’intermédiaire des paramètres figurant au sein de son
          logiciel de navigation.
        </p>
        <h3 className="font-bold text-xl mt-5 mb-5">
          ARTICLE 8 : Publication par l’Utilisateur
        </h3>
        <p>
          Le site permet aux membres de publier les contenus suivants : Création
          de séminaire et demande de contact. <br />
          Dans ses publications, le membre s’engage à respecter les règles de la
          Netiquette (règles de bonne conduite de l’internet) et les règles de
          droit en vigueur. <br /> Le site peut exercer une modération sur les
          publications et se réserve le droit de refuser leur mise en ligne,
          sans avoir à s’en justifier auprès du membre. <br />
          Le membre reste titulaire de l’intégralité de ses droits de propriété
          intellectuelle. Mais en publiant une publication sur le site, il cède
          à la société éditrice le droit non exclusif et gratuit de représenter,
          reproduire, adapter, modifier, diffuser et distribuer sa publication,
          directement ou par un tiers autorisé, dans le monde entier, sur tout
          support (numérique ou physique), pour la durée de la propriété
          intellectuelle. Le Membre cède notamment le droit d{"'"}utiliser sa
          publication sur internet et sur les réseaux de téléphonie mobile.{" "}
          <br /> La société éditrice s{"'"}engage à faire figurer le nom du
          membre à proximité de chaque utilisation de sa publication. Tout
          contenu mis en ligne par l{"'"}Utilisateur est de sa seule
          responsabilité. <br /> L{"'"}
          Utilisateur s{"'"}engage à ne pas mettre en ligne de contenus pouvant
          porter atteinte aux intérêts de tierces personnes. Tout recours en
          justice engagé par un tiers lésé contre le site sera pris en charge
          par l{"'"}Utilisateur. Le contenu de l{"'"}Utilisateur peut être à
          tout moment et pour n{"'"}importe quelle raison supprimée ou modifié
          par le site, sans préavis.
        </p>
        <h3 className="font-bold text-xl mt-5 mb-5">
          ARTICLE 9 : Droit applicable et juridiction compétente
        </h3>
        <p className="mb-10">
          La législation française s{"'"}applique au présent contrat. En cas d
          {"'"}absence de résolution amiable d{"'"}un litige né entre les
          parties, les tribunaux français seront seuls compétents pour en
          connaître. <br />
          Pour toute question relative à l’application des présentes CGU, vous
          pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 1.
        </p>
      </div>
    </div>
  )
}

export default CGU
