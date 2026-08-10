import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ICertification } from '../models/ICertification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private apiUrl = '/api/certifications';

  private defaultCertifications: ICertification[] = [
    {
      id: 'cert-1',
      titre: 'HCIA-openEuler V1.0 Course',
      organisme: 'Huawei ICT Academy',
      date_obtention: '29 Janvier 2026',
      image_badge: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
      lien_verification: 'Code: EBG20260129000015',
      description: 'Certification officielle Huawei validant l\'administration avancée de système d\'exploitation Linux openEuler d\'entreprise, la gestion de sécurité serveur et le déploiement d\'infrastructure cloud.',
      competences_cles: ['openEuler Linux', 'Administration Système', 'Sécurité Kernel', 'Bash & RPM'],
      histoire_organisme: 'Huawei Technologies, fondée en 1987 à Shenzhen par Ren Zhengfei, est aujourd\'hui le leader mondial des équipements de télécommunication. Avec plus de 197 000 employés dans 170 pays et un chiffre d\'affaires de 99,4 milliards USD en 2023, Huawei est reconnue comme l\'une des entreprises technologiques les plus innovantes au monde. L\'Huawei ICT Academy est le bras académique de Huawei, partenaire officiel de centaines d\'universités dans 150+ pays pour former la prochaine génération d\'ingénieurs cloud.',
      reconnaissance_mondiale: 'Les certifications Huawei ICT sont reconnues par les grandes entreprises de télécommunication, les opérateurs cloud et les DSI à travers l\'Afrique, l\'Asie, l\'Europe et l\'Amérique. Plus de 400 000 étudiants certifiés Huawei dans le monde. openEuler est l\'OS Linux d\'entreprise qui motorise les datacenters de China Mobile, Deutsche Telekom et Bank of China. La certification HCIA est la première étape de la filière Huawei (HCIA → HCIP → HCIE), équivalent de CompTIA A+ dans l\'écosystème Huawei.',
      apports_personnels: 'Cette certification m\'a permis de maîtriser l\'administration d\'un système Linux d\'entreprise de niveau production. J\'ai acquis les bases solides pour gérer des serveurs en environnement professionnel : gestion des processus, des permissions, du réseau, de la sécurité et du packaging RPM. C\'est une compétence directement applicable dans les rôles DevOps, SysAdmin et Cloud Engineer.',
      domaines_couverts: ['Administration Linux Avancée', 'Gestion Réseau & Sécurité', 'Infrastructure Cloud', 'Automatisation Bash', 'Packaging RPM & Gestion de paquets']
    },
    {
      id: 'cert-2',
      titre: 'AI Basic: Overview of AI (CRA Training Program)',
      organisme: 'Huawei ICT Academy & CRA',
      date_obtention: '14 Janvier 2026',
      image_badge: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=400&q=80',
      lien_verification: 'Code: ICTCRA20260114037805',
      description: 'Spécialisation intensive en Intelligence Artificielle délivrée par Huawei. Couvre le Machine Learning, Deep Learning, la Vision par Ordinateur et le Framework MindSpore.',
      competences_cles: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'MindSpore Framework'],
      histoire_organisme: 'Huawei ICT Academy, en partenariat avec le CRA (Centre de Ressources pour l\'Afrique), a développé un programme de formation d\'excellence destiné à former les talents africains en Intelligence Artificielle. Ce programme s\'inscrit dans la stratégie "Seeds for the Future" de Huawei visant à créer 500 000 talents numériques en Afrique d\'ici 2030.',
      reconnaissance_mondiale: 'Cette certification est alignée sur les standards de l\'industrie IA (IEEE, ISO/IEC 42001). Elle est reconnue par les entreprises tech en Afrique, Europe et Asie. MindSpore, le framework IA propriétaire de Huawei, rivalise avec TensorFlow et PyTorch sur le marché asiatique. Le programme CRA est soutenu par l\'Union Africaine et plusieurs gouvernements comme programme stratégique de transformation numérique.',
      apports_personnels: 'J\'ai acquis une compréhension complète du cycle de vie d\'un projet IA : de la collecte et préparation des données jusqu\'au déploiement du modèle. J\'ai découvert les architectures CNN, RNN et Transformer, et j\'ai appris à utiliser MindSpore pour construire et entraîner des modèles de Deep Learning. Cette certification a orienté ma vision vers l\'intégration de l\'IA dans mes projets de développement.',
      domaines_couverts: ['Machine Learning Supervisé & Non supervisé', 'Réseaux de Neurones Profonds (Deep Learning)', 'Computer Vision & Traitement d\'Images', 'Framework MindSpore', 'Éthique de l\'Intelligence Artificielle']
    },
    {
      id: 'cert-3',
      titre: 'Overview of AI',
      organisme: 'Huawei ICT Academy',
      date_obtention: '14 Janvier 2026',
      image_badge: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80',
      lien_verification: 'Code: ICT20260114058660',
      description: 'Accréditation internationale Huawei démontrant la compréhension globale des algorithmes d\'apprentissage supervisé, réseaux de neurones artificiels et architectures d\'IA.',
      competences_cles: ['Réseaux de Neurones', 'Algorithmes IA', 'Traitement du Langage (NLP)'],
      histoire_organisme: 'Huawei ICT Academy est le programme de formation certifiante officiel de Huawei Technologies, créé pour répondre au besoin mondial de talents en Technologies de l\'Information et de la Communication. Avec des académies dans plus de 2 600 universités et instituts dans 150 pays, Huawei ICT Academy est l\'une des plus grandes plateformes de certification tech au monde.',
      reconnaissance_mondiale: 'Les certifications Huawei ICT AI sont reconnues à l\'échelle mondiale dans le secteur technologique et académique. Elles démontrent une maîtrise des concepts fondamentaux de l\'IA tels qu\'ils sont utilisés dans les produits phares de Huawei : Ascend AI Processor, Atlas 300, Cloud EI. Ces certifications ouvrent des portes dans les entreprises tech africaines, les GAFAM et les sociétés de conseil en transformation digitale.',
      apports_personnels: 'Cette certification m\'a fourni les bases conceptuelles solides de l\'IA que j\'applique maintenant dans tous mes projets : compréhension des modèles de régression, classification, clustering, et des architectures neuronales. Elle m\'a donné le vocabulaire et la culture technique pour collaborer efficacement avec des équipes data science.',
      domaines_couverts: ['Fondamentaux de l\'IA & Machine Learning', 'Algorithmes de Régression & Classification', 'Réseaux de Neurones Artificiels', 'Traitement du Langage Naturel (NLP)', 'Tendances IA & Applications Industrielles']
    },
    {
      id: 'cert-4',
      titre: 'Hackathon DevFest Cloud Abidjan & Cocody 2025',
      organisme: 'Google Developer Groups (GDG Cloud)',
      date_obtention: 'Oct. - Nov. 2025',
      image_badge: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80',
      lien_verification: 'DevFest Cloud Abidjan',
      description: 'Certificat de participation au Hackathon DevFest organisé par Google Developer Groups. Conception et développement rapide d\'une solution logicielle Cloud sous pression.',
      competences_cles: ['Google Cloud Platform', 'Développement Agile', 'Hackathon & Problem Solving', 'Architecture Cloud'],
      histoire_organisme: 'Google Developer Groups (GDG) est le réseau mondial de communautés de développeurs soutenu officiellement par Google. Fondé en 2007, GDG regroupe plus de 1 000 chapitres dans 120+ pays avec plus de 500 000 membres actifs. GDG Cloud Abidjan est le chapitre ivoirien spécialisé dans les technologies cloud Google, l\'un des plus actifs d\'Afrique de l\'Ouest. DevFest est l\'événement phare annuel de GDG, équivalent d\'une conférence Google locale.',
      reconnaissance_mondiale: 'Participer au DevFest Google est reconnu dans la communauté tech mondiale comme signe d\'engagement dans l\'écosystème Google Cloud et d\'implication dans la communauté open-source. Les employeurs tech (startups, scale-ups, GAFAM) voient positivement les participations aux hackathons GDG comme preuve de capacité à résoudre des problèmes concrets rapidement. GDG est directement soutenu par Google, ce qui lui confère une légitimité maximale.',
      apports_personnels: 'Ce hackathon m\'a mis en situation réelle de développement sous pression : conception d\'une solution complète en un temps limité, travail en équipe, prise de décision rapide et présentation devant un jury. J\'ai renforcé mes capacités d\'architecture cloud, de prototypage rapide et de pitching technique. C\'est une expérience qui démontre concrètement ma capacité à livrer sous contrainte.',
      domaines_couverts: ['Architecture Cloud (GCP)', 'Développement Rapide & Prototypage', 'Travail en Équipe & Collaboration', 'Présentation Technique & Pitching', 'Problem Solving sous Pression']
    },
    {
      id: 'cert-5',
      titre: 'Achieve 10X Productivity with AI-driven Tools',
      organisme: 'Universal AI University',
      date_obtention: '2025',
      image_badge: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
      lien_verification: 'Karjat, Mumbai - India',
      description: 'Atelier de spécialisation organisé par la première université spécialisée en IA en Inde. Maîtrise des outils d\'IA générative et prompt engineering pour multiplier par 10 la productivité dev.',
      competences_cles: ['AI-Driven Productivity', 'Generative AI', 'Prompt Engineering', 'Automatisation Workflows'],
      histoire_organisme: 'Universal AI University (UAU) est une institution d\'enseignement supérieur pionnière en Inde entièrement dédiée à l\'Intelligence Artificielle, fondée à Karjat près de Mumbai. C\'est la première université en Inde à être spécialement conçue autour de l\'IA comme discipline transversale à tous les cursus. Elle est approuvée par l\'UGC (University Grants Commission) et s\'est rapidement imposée comme référence nationale pour la formation en IA appliquée.',
      reconnaissance_mondiale: 'Universal AI University est reconnue par le Ministère de l\'Éducation indien et les grands acteurs tech (Microsoft, IBM, Google ont des partenariats avec l\'institution). L\'Inde étant le 3ème plus grand hub tech mondial et le leader mondial en exports IT, les formations issues d\'institutions indiennes spécialisées en IA ont une excellente reconnaissance auprès des recruteurs tech internationaux. Participer à un workshop en Inde démontre un niveau d\'engagement et d\'ouverture internationale rare.',
      apports_personnels: 'Cet atelier m\'a donné les outils concrets pour intégrer l\'IA générative dans mon workflow quotidien de développeur : utilisation avancée de GitHub Copilot, Claude, ChatGPT et Midjourney pour multiplier ma productivité. J\'ai appris le Prompt Engineering avancé, les techniques d\'automatisation de tâches répétitives et l\'intégration d\'APIs IA dans des applications web. Résultat : je suis 3 à 10x plus rapide sur certaines tâches.',
      domaines_couverts: ['Prompt Engineering Avancé', 'Intégration d\'APIs IA Génératives', 'Automatisation de Workflows Dev', 'GitHub Copilot & AI Coding Assistants', 'Stratégie d\'Adoption de l\'IA en Entreprise']
    }
  ];

  private certsSubject = new BehaviorSubject<ICertification[]>(this.defaultCertifications);

  constructor(private http: HttpClient) {}

  getAll(): Observable<ICertification[]> {
    this.http.get<ICertification[]>(this.apiUrl).pipe(
      catchError(() => of(null))
    ).subscribe(data => {
      if (data && data.length) {
        const merged = data.map(item => {
          const def = this.defaultCertifications.find(d => d.id === item.id || d.titre === item.titre);
          if (!def) return item;
          return {
            ...def,
            ...item,
            histoire_organisme: item.histoire_organisme || def.histoire_organisme,
            reconnaissance_mondiale: item.reconnaissance_mondiale || def.reconnaissance_mondiale,
            apports_personnels: item.apports_personnels || def.apports_personnels,
            domaines_couverts: (item.domaines_couverts && item.domaines_couverts.length) ? item.domaines_couverts : def.domaines_couverts,
            competences_cles: (item.competences_cles && item.competences_cles.length) ? item.competences_cles : def.competences_cles
          };
        });
        this.certsSubject.next(merged);
      }
    });

    return this.certsSubject.asObservable();
  }

  getById(id: string): Observable<ICertification | null> {
    return this.getAll().pipe(
      map(list => list.find(c => c.id === id || String(c.id) === String(id)) || null)
    );
  }

  add(cert: ICertification): Observable<ICertification> {
    return this.http.post<ICertification>(this.apiUrl, cert);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}
