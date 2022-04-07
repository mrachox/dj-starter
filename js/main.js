import {
  createApp
} from 'vue'
// import TodoItem from './TodoItem.js'
// import ButtonCounter from './ButtonCounter.js'

createApp({
  // data() {
  //   return {
      // references: [
      //   {
      //     id: 1001,
      //     year: 2021,
      //     author: "Victoria Rawlings, James Flexner and Lynette Riley (Eds)",
      //     title: "Community-Led Research: Walking New Paths Together",
      //     apa_citation: "Rawlings, V., Flexner, J., & Riley, L. (Eds.) (2021). Community-Led Research: Walking New Pathways Together. Sydney: Sydney University Press. DOI: 10.30722/sup.9781743327579",
      //     type: "Book (B)",
      //     keywords: "",
      //     abstract: "The concept of Community-Led Research has taken off in recent years in a variety of fields, from archaeology and anthropology to social work and everything in between. Drawing on case studies from Australia and the Pacific, this book considers what it means to participate in Community-Led Research, for both communities and researchers. How can researchers and communities work together well, and how can research be reimagined using the knowledge of First Nations peoples and other communities to ensure it remains relevant, sustainable, socially just and inclusive?",
      //     location: "Australia",
      //     methods: {
      //        "Sample": "N/A"
      //     },
      //     qualitative: {
      //        "Quantitative": "Both"
      //     },
      //     main_findings: "N/A",
      //     notes: "In trying to differentiate 'community-led research' from participatory-action research, community-based participatory research, and 'activist' research each chapter shares central ethical aims/goals but conceptualize community-led research in slightly different ways."
      //  },
      //   {
      //     id: 101,
      //     year: 2017,
      //     author: "S. Martin Taylor, Joanna Ochocka",
      //     title: "Advancing community-based research in Canada",
      //     apa_citation: "Taylor, S. M., & Ochocka, J. (2017). Advancing community-based research in Canada. International Journal of Knowledge-Based Development, 8(2), 183-200.",
      //     type: "Journal Article (JA)",
      //     keywords: "community-based research; Canada; standards of excellence; national networks",
      //     abstract: "Canada has a strong track record of community-based research. The Social Sciences and Humanities Council of Canada (SSHRCC) has made partnership research one of the three main components of its funding architecture. Community Based Research Canada (CBRC) supports a national network of university and community researchers working on a broad range of projects addressing issues of high priority on the research and societal agendas. In November 2014, CBRC partnered with the Centre for Community Based Research in Waterloo, Ontario to host a national summit focused on developing standards of excellence for community-based research based on previous work and exemplified by seminal regional case studies. The follow-up is to establish a network of regional hubs of excellence to advance research and its applications to public policy at regional and national levels with standards of excellence derived from the summit serving as guiding principles for best practice.",
      //     location: "Canada",
      //     methods: {
      //        "Sample": "N/A"
      //     },
      //     qualitative: {
      //        "Quantitative": "N/A"
      //     },
      //     main_findings: "N/A",
      //     notes: "Defines Canadian community-based research and its objectives. Provides guiding principles and best practices that have been used/useful in the Canadian context. Also prevoides a list of reflexive questions researchers and stakeholders can use to asses a community-based project. "
      //  },
      //   {
      //     id: 102,
      //     year: 2020,
      //     author: "Michelle L. Dion, Claudia Díaz Ríos, Kelsey Leonard, Chelsea Gabel",
      //     title: "Research Methodology and Community Participation: A Decade of Indigenous Social Science Research in Canada",
      //     apa_citation: "Dion, M. L., Díaz Ríos, C., Leonard, K., & Gabel, C. (2020). Research methodology and community participation: A decade of Indigenous social science research in Canada. Canadian Review of Sociology/Revue canadienne de sociologie, 57(1), 122-146.",
      //     type: "Journal Article (JA)",
      //     keywords: "",
      //     abstract: "Those engaged in community-based participatory research often comment on tensions between social scientific and community values, yet little systematic evidence exists about the relationship between social science research methodologies and community participation. We Indigenous participants often fails to go beyond minimum levels of\nconsultation required by policies. analyze nearly 500 peer-reviewed articles published between 2005 and 2015 on Indigenous issues in Canada, where policies encourage participatory research methods with disempowered groups. We find that research that includes Indigenous. participation is more likely to include Indigenous epistemologies and participatory evidence sources and analysis methods. We also find that peer-reviewed research involving",
      //     location: "Canada",
      //     methods: {
      //        "Sample": "Sytematic analysis of 497 peer-reviewed research articles on indigenous issues in Canada (pp. 124-128). "
      //     },
      //     qualitative: {
      //        "Quantitative": "Qualitative"
      //     },
      //     main_findings: "The authors find that community-based research projects and initiatives that target/support indigenous communities are often led by non-indigenous researchers. They also find that indigenous researchers tend to prefer \"emancipatory and participatory research methods\" (p. 141). They suggest improving these discrepancies by 1) including interaction with indigenous communities (p. 141); 2) going beyond the tri-council policies and to \"deepen meaningful Indegenous participation in research\" (p. 141); and 3) supporting and promoting research by indigenous peoples and scholars. ",
      //     notes: "Indentifies and provides an overview of research involving indigenous communities in Canada. The article provides a critical analysis on the state of indigenous-led research in the Canadian context and offers potential solutions to improve issues with the conceptualization and mobilization of indgenous-led as well as community-led reserach in Canada. "
      //  },
      //   {
      //     id: 1002,
      //     year: 2021,
      //     author: "Tristan Pearce (Eds)",
      //     title: "Research with Arctic Inuit Communities: Graduate Student Experiences, Lessons and Life Learnings",
      //     apa_citation: "Pearce, T., (Eds.) (2021). Research with Arctic Inuit Communities. Springer International Publishing.",
      //     type: "Book (B)",
      //     keywords: "",
      //     abstract: "Provides new Arctic social researchers with a resource to help them be better prepared for working with Inuit communities. Highlights graduate student experiences in arctic social science research with Inuit in the Canadian Arctic. Offers graduate student views from different branches of geography including, health, human, cultural, environmental and geospatial.",
      //     location: "Canada",
      //     methods: {
      //        "Sample": ""
      //     },
      //     qualitative: {
      //        "Quantitative": ""
      //     },
      //     main_findings: "",
      //     notes: ""
      //  },
      //   {
      //     id: 103,
      //     year: 2021,
      //     author: "Margaret Orr, Natasia Mukash and Paula Menarick",
      //     title: "Rediscovering the Tradition of Painted Caribou Belongings in Eeyou Istchee: A Community-Based and Community-Led Research Project",
      //     apa_citation: "Orr, M., Mukash, N., & Menarick, P. (2021). Rediscovering the Tradition of Painted Caribou Belongings in Eeyou Istchee: A Community-Based and Community-Led Research Project. KULA: Knowledge Creation, Dissemination, and Preservation Studies, 5(1), 1-10.",
      //     type: "Journal Article (JA)",
      //     keywords: "Decolonization; self-determination; Eeyou Istchee; community-based research; painted caribou coats",
      //     abstract: "One of the core programming goals at Aanischaaukamikw Cree Cultural Institute is to rediscover, relearn, and reintroduce the traditions of our historic belongings through the display, study, and research of belongings currently cared for by museums outside our region. In 2017, we received funding from the Canada Council of the Arts for a multi-year research and knowledge creation project, \"Rediscovering the Tradition of Painted Caribou Coats in Eeyou Istchee.\" Our project brought Eeyou knowledge together with surviving examples of painted caribou coats and accessories from the eighteenth and nineteenth centuries usually referred to, and classified as, \"Naskapi\" by museums and \"experts\" outside our region.",
      //     location: "Canada",
      //     methods: {
      //        "Sample": "Research Creation; Fieldwork; Workshop"
      //     },
      //     qualitative: {
      //        "Quantitative": "Qualitative"
      //     },
      //     main_findings: "",
      //     notes: "Mobilizes the principles of indigenous-led research trrough a project which focuses on painted caribou objects. The project indegnous knowledge through \"grounded-normativity\": \"the modalities of Indigenous land-connected practices and longstanding experiential knowledge that inform and structure our ethical engagements with the world and our relationship with human and non human others over time\" (p. 4)."
      //  },
      //   {
      //     id: 104,
      //     year: 2007,
      //     author: "Sarah Flicker, Beth Savan, Brian Kolenda, Matto Mildenberger",
      //     title: "A snapshot of community-based research in Canada: Who? What? Why? How?",
      //     apa_citation: "Flicker, S., Savan, B., Kolenda, B., & Mildenberger, M. (2008). A snapshot of community-based research in Canada: Who? What? Why? How?. Health Education Research, 23(1), 106-114.",
      //     type: "Journal Article (JA)",
      //     keywords: "budgets, Canada, government, community",
      //     abstract: "Community-Based Research (CBR) is rapidly gaining recognitions as an important tool in addressing complex environmental, health and social problems. However, little is known about the Canadian CBR context. A web-based survey including 25 questions was circulated on listservs and via targeted e-mails to investigate the status of CBR in Canada. Univariate and bivariate statistical analyses were performed to examine variables and relationships of interest. Our sample included a cross-section of CBR community and academic practitioners (n = 308). Respondents reported a wide range of project foci, experience, operating budgets and reasons for engaging in their last CBR endeavor. Academic partners were perceived to be most involved at all stages of the research process except dissemination. Service providers were also perceived as being very involved in most stages of research. Community members were substantially less engaged. High levels of satisfaction were reported for both CBR processes and outcomes. Respondents reported a number of positive outcomes as a result of their research endeavors, including changes in both agency and government policies and programs. Our study shows that CBR practitioners are engaged in research on a wide array of Canadian health and social issues that is making a difference. Finding appropriate levels of participation for community members in CBR remains an ongoing challenge.",
      //     location: "Canada",
      //     methods: {
      //        "Sample": "Cross-national survey analysis of Community-based research in Canada which included a review of the CBR literature available at the time and a survey that was shared with \"leading CBR practitioners\" (p. 107). "
      //     },
      //     qualitative: {
      //        "Quantitative": "Mixed-Methods"
      //     },
      //     main_findings: "Community-Based Research (CBR) is used in a wide array of fields with projects spanning topics including: life course research, ethno-racial communities (i.e.: indigenous communities) or other communities of identity (i.e.: LGBTQ+ community), community sharing diseases experiences (i.e.: chronic illness, disabled community), community sustainability, poverty, education, health and welfare, housing, etc. They authors found that, of those using CBR, most researchers use the method for community assessment, evaluation, and/or awareness (pp. 108-109). They also found that academic researchers (most of the survey respondents) were the most involved throughout the CBR projects while community members were involved in defining research questions, dissemination, and advocacy (p. 109). The authors also found that most respondents were satisfied with both the process and the results emerging from their CBR work. Principal investigators reported the highest satisfaction levels while dissatisfaction was present accross all the actors involved in CBR (p. 110). The most common outputs from these CBR projects included presentations, published papers, and policy documents (p. 110).",
      //     notes: "The authors note that their sample was self-selected and therefore mimght not accurately represent CBR practioners or those invovled in the process. This, in turn, might skew their results regarding satisfaction with CBR projects. They also not that Ontario was overrepresented in their sample meaning that their results might not reflect how CBR practitioners and partitipants might feel in the rest of Canada."
      //  },
      //   {
      //     id: 105,
      //     year: 2020,
      //     author: "Crystal Tremblay, Rhianna Nagel, Alexandra Haupt, Andrea Giles and Norah McRae",
      //     title: "Knowledge, Democracy and a Sustainable Future: An Institutional Impact Assessment of Community-Engaged Research and Learning",
      //     apa_citation: "Tremblay, C., Nagel, R., Haupt, A., Giles, A., & McRae, N. (2020). Knowledge, democracy and a sustainable future: An institutional impact assessment of community-engaged research and learning. Autonomie locali e servizi sociali, 43(1), 69-86.",
      //     type: "Journal Article (JA)",
      //     keywords: "Community-Engaged Research, Community-Engaged Learning, Impact Evaluation, UN Sustainable Development Goals",
      //     abstract: "The United Nations Sustainable Development Goals (SDGs), which include providing inclusive and quality education (G4), promoting health and well-being (G3), achieving gender equality (G5) and climate action (G13) were adopted by the United Nations in 2015 and provide an important framework and pathway towards a sustainable and just future. Increasingly, institutions of higher education are looking to these 17 goals as a way to measure their relevance and impact on society – and some are doing this through community- engaged research and learning. This article shares insights from an institutional impact assessment linked to the UN SDGs from the University of Victoria (UVic), located on Coast Salish and Straits Salish territories of the Lekwungen and W_SÁNEÅ Peoples, on the west coast of Canada. The case study provides an overview of the methodology, highlights some of the various ways impact is being measured and speaks to some of the opportunities both for UVic and other universities wishing to pursue a similar process. The results point to a wide range and diversity of impact to society in almost all the UN goals, also documented at various levels (i.e. individual, community, systems). This work has helped inform guidelines for recognizing community-engaged scholarship in faculty evaluation.",
      //     location: "Canada",
      //     methods: {
      //        "Sample": "The authors conduct a case study to evaluate the efficacy of community-led/community engaged research (CER) based out of the University of Victoria (p. 75). The authors assessed  community-engaged research conducted at the University of Victoria using the following criteria: 1) micro (individual)/messo (community)/macro (systems) levels of impact; 2) community perspectives in assessing the impact of CER; 3) qualitative and quantitative data."
      //     },
      //     qualitative: {
      //        "Quantitative": "Qualitative and Quantitative"
      //     },
      //     main_findings: "The authors find that, in the case of the University of Victoria, community-engaged learning was effective in enhancing the intergration of \"community experience\" with student learning (p. 80). They also find that although the approach is effective, in the university context, stakeholders are often solely responsible for the mobilization of community-engaged learning and requires more administrative support (pp. 80-81). Community-led learning also had a hight impact on student outcomes (i.e.: development of skills, employement, and profesionall development) although they note that this success might not be reproducible in other contexts (p. 83). They also find that non-traditional knowledge outputs (i.e.: outputs that are not peer-reviewed journal articles) have high impact with practioners, research partners and students (pp. 83-84).",
      //     notes: "Provides clear and actionable definitions of community-engaged research, community engaged learning, knowledge mobilization, and institutional supports that can be used before and during the design of a community-based research/community engaged project. "
      //  },
      //   {
      //     id: 106,
      //     year: 2008,
      //     author: "Timothy K. Stanton",
      //     title: "New times demand new scholarship: Opportunities and challenges for civic engagement at research universities",
      //     apa_citation: "Stanton, T. K. (2008). New times demand new scholarship: Opportunities and challenges for civic engagement at research universities. Education, Citizenship and Social Justice, 3(1), 19-42.",
      //     type: "Journal Article (JA)",
      //     keywords: "civic engagement, engaged scholarship, research university, higher education",
      //     abstract: "This article summarizes discussions held by 23 scholars from research universities in the USA, who are committed to civic and community engaged scholarship and working to advance this work on their campuses and in their communities. This meeting was second in a series first convened by Campus Compact and Tufts University to advance civic engagement within research institutions. This statement, endorsed by the entire group, focuses on opportunities and challenges in four critical areas: engaged scholarship; scholarship focused on civic and community engagement; educating students for civic and community engagement; institutionalization. It identifies challenges to establishing and sustaining engaged scholarship presented by research university contexts, and offers a vision for fully engaged institutions, calling on colleagues to embrace this vision and work to bring it about.",
      //     location: "United States",
      //     methods: {
      //        "Sample": ""
      //     },
      //     qualitative: {
      //        "Quantitative": ""
      //     },
      //     main_findings: "",
      //     notes: "Highlights and attempts to works through some of the tensions between community engaged research and the academic industrial complex. Provides a definition of community engaged research discussing its purpose, it's process, and its possible outcomes. Also outlines some reccomendations related to the process and the outcomes of community engaged research."
      //  },
      //   {
      //     id: 107,
      //     year: 2012,
      //     author: "Lisa Wenger, Linda Hawkins, and Sarena D. Seifer",
      //     title: "Community-Engaged Scholarship: Critical Junctures in Research, Practice, and Policy",
      //     apa_citation: "Wenger, L., Hawkins, L., & Seifer, S. D. (2012). Community-engaged scholarship: Critical junctures in research, practice, and policy. Journal of Higher Education Outreach and Engagement, 16(1), 171-182.",
      //     type: "Journal Article (JA)",
      //     keywords: "",
      //     abstract: "Community-engaged scholarship and community-academic partnerships are gaining momentum in higher education institutions. Federal research funding agencies in Canada have moved aggressively toward increasing support for community-engaged research and knowledge mobilization efforts. Yet there is a well-articulated disjuncture between calls for social relevance, knowledge translation and mobilization, community-based research, service-learning, and engagement more broadly; and the resources, structures, and policies in Canadian universities. In November 2010, the University of Guelph and Community-Campus Partnerships for Health convened national and international leaders from diverse organizational and disciplinary backgrounds to consider what is known about community-engaged scholarship in higher education and its implications for future research, practice, and policy. Participants identified con-ceptual challenges, values and tensions, opportunities for action, and resources to support community-engaged scholarship.",
      //     location: "Canada",
      //     methods: {
      //        "Sample": ""
      //     },
      //     qualitative: {
      //        "Quantitative": ""
      //     },
      //     main_findings: "",
      //     notes: ""
      //  },
      //   {
      //     id: 108,
      //     year: 2005,
      //     author: "Meredith Minkler ",
      //     title: "Community-based research partnerships: Challenges and opportunities",
      //     apa_citation: "Minkler, M. (2005). Community-based research partnerships: challenges and opportunities. Journal of urban health, 82(2), ii3-ii12.",
      //     type: "Journal Article (JA)",
      //     keywords: "Community-based participatory research, Ethical issues in research, Participatory action research, Partnership, Urban health",
      //     abstract: "The complexity of many urban health problems often makes them ill suited to traditional research approaches and interventions. The resultant frustration, together with community calls for genuine partnership in the research process, has highlighted the importance of an alternative paradigm. Community-based participatory research (CBPR) is presented as a promising collaborative approach that combines systematic inquiry, participation, and action to address urban health problems. Following a brief review of its basic tenets and historical roots, key ways in which CBPR adds value to urban health research are introduced and illustrated. Case study examples from diverse international settings are used to illustrate some of the difficult ethical challenges that may arise in the course of CBPR partnership approaches. The concepts of partnership synergy and cultural humility, together with protocols such as Green et al.’s guidelines for appraising CBPR projects, are highlighted as useful tools for urban health researchers seeking to apply this collaborative approach and to deal effectively with the difficult ethical challenges it can present.",
      //     location: "United States",
      //     methods: {
      //        "Sample": ""
      //     },
      //     qualitative: {
      //        "Quantitative": ""
      //     },
      //     main_findings: "The article describes the history of community-based participatory research, its central principles, as well as how it can compliment and augment research in urban health studies (pp. 3-7). They also discuss the key challenges and dillemas when mobilizing community-based participatory research in the context of urban health studies. The author draws on case studies and examples from different health settings to illustrate these issues. They also discuss some of the ethical issues related to health based research and how they might manifest in a community-based/participatory context (e.g.: issues related to sharing information and findings about a specific community) (pp. 8-10). The author finds that despite the ethical dillemas and challenges, CBPR is a useful approach to urban health studies (p. 10).",
      //     notes: "Discusses the strenghts/weaknesses of Community-based participatory research (CBPR) as an approach as well as issues researchers want to keep in mind while designing CBR projects and during the research process. Touches on the role of the researcher and the community in such projects (as it relates to health-based research) and issues/dillemas that might arise."
      //  }
      // ],
      // count: 0
  //   }
  // },
  // template: `
  //   <button @click="count++">
  //     You clicked me {{ count }} times.
  //   </button>`,
  data() {
    return {
      dataPull: {}
    }
  },
  // components: {
  //   TodoItem,
  // },
  created() {
    console.log("I've been created")
    // Simple GET request using fetch
    fetch("../data/reference.json")
      .then(response => response.json())
      // .then(data => (console.log(data)));
      .then(data => (this.dataPull = data));

  },
}).mount('#app')
