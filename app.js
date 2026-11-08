const themes={all:['Tous les projets','All projects'],ai:['IA & création','AI & creation'],robot:['Robotique','Robotics'],games:['Jeux & serveurs','Gaming & servers'],media:['Web & médias','Web & media']};
const projects=[
['ia-agent','ai','Python','Mon agent d’intelligence artificielle.','My artificial intelligence agent.'],
['ia-bd','ai','JavaScript','Une stack IA pour accompagner la création de bandes dessinées.','An AI stack to help create comics.'],
['nao-emotion-motion','robot','Python','Apprendre des mouvements expressifs de la tête et des bras de NAO, selon l’émotion et son intensité.','Learning expressive NAO head and arm movements from demonstrations, conditioned on emotion and intensity.'],
['NAO-V5-ressources','robot','Documentation','Manuel et ressources linguistiques pour NAO v5. Fork du dépôt Aldebaran.','NAO v5 user manual and language resources. A fork of the Aldebaran repository.'],
['myCoopHub','games','JavaScript','Gérer ses serveurs de jeux coopératifs sur Coolify via une interface web et des automatisations Discord.','Manage co-op game servers on Coolify through a web interface and Discord automation.'],
['steamcmd-servers','games','Shell','Une base de serveurs dédiés utilisant SteamCMD, avec ou sans Wine.','A foundation for dedicated servers using SteamCMD, with or without Wine.'],
['galleryPerso','media','PHP','Présenter sur le web les fichiers d’un dossier hébergé sur un VPS.','Bring a folder hosted on a VPS directly to the web.'],
['streamEvent','media','Python','Diffuser des événements en streaming, notamment sportifs.','Stream events, including sports.'],
['Monolithoid','media','Profile','Le dépôt de mon profil GitHub et cette présentation de mes projets.','My GitHub profile repository and this showcase of my projects.']
];
let lang='fr',active='all';
try{if(localStorage.getItem('portfolio-lang')==='en')lang='en'}catch{}
function render(){
 document.documentElement.lang=lang;document.title=lang==='fr'?'Monolithoid — Projets':'Monolithoid — Projects';
 document.querySelectorAll('[data-fr]').forEach(el=>el.innerHTML=el.dataset[lang]);
 ['fr','en'].forEach(l=>document.getElementById(l).setAttribute('aria-pressed',String(l===lang)));
 const filters=document.querySelector('.filters');filters.replaceChildren();
 Object.entries(themes).forEach(([key,labels])=>{const b=document.createElement('button');b.textContent=labels[lang==='fr'?0:1];b.setAttribute('aria-pressed',String(active===key));b.onclick=()=>{active=key;render();document.querySelectorAll('.filters button')[Object.keys(themes).indexOf(key)].focus()};filters.append(b)});
 const grid=document.getElementById('grid');grid.replaceChildren();
 const shown=projects.filter(p=>active==='all'||p[1]===active);
 document.getElementById('count').textContent=`${String(shown.length).padStart(2,'0')} / 09`;
 shown.forEach(([name,theme,tech,fr,en])=>{const a=document.createElement('a');a.className='card';a.href=`https://github.com/Monolithoid/${name}`;a.innerHTML=`<div class="card-top"><span class="category">${themes[theme][lang==='fr'?0:1]}</span><span class="arrow" aria-hidden="true">↗</span></div><h3>${name}</h3><p>${lang==='fr'?fr:en}</p><div class="card-bottom"><span>${tech}</span><span>${name==='NAO-V5-ressources'?'Fork':'GitHub'}</span></div>`;grid.append(a)});
}
['fr','en'].forEach(l=>document.getElementById(l).onclick=()=>{lang=l;try{localStorage.setItem('portfolio-lang',l)}catch{}render()});render();
