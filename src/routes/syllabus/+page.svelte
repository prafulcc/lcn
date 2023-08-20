<svelte:head>
    <title>Syllabus - London College of Nursing - Kallakurichi </title>
    <meta name="description" content="Study B.Sc Nursing at the only approved nursing college in Kallakurichi district. London College of Nursing, Kallakurichi is uniquely designed to train nurses with international aspirations.">
</svelte:head>

{#if !subjectPage}
<!-- Title -->
<div class="border-b">
    <h1 class="text-3xl tracking-tight sm:text-4xl p-6 lg:text-start underline">Syllabus: Course Overview</h1>
    <p class="text-base text-gray-500 px-6 pb-6 lg:w-[600px] ">The course covers 30 subjects, taught as modules. 2 or more modules may be taught at the same time. All exams will test modules seperately, apart from EOY finals which are comprehensive.</p>

    <div class="mb-8 justify-start flex px-6">
        <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-blue-900/50 hover:ring-blue-900 bg-blue-400/20 hover:drop-shadow">
          <span class="text-blue-600 flex">
              <a href="/syllabus/exams" class="text-sm font-semibold text-blue-600 hover:underline">
                  Exams & Arrears Policy
                  <span aria-hidden="true">&rarr;</span>
              </a>
          </span>
        </div>
      </div>
</div>

<!-- Select Year Navigation -->
<div class="py-6 flex px-6 justify-center border-b lg:border-none lg:justify-start sticky top-8 bg-white drop-shadow-3xl">
    <label class="pr-6">
        <input id="1" bind:group={selected} type="radio" name="amount" value="1"/> Y1
    </label>
    <label class="pr-6">
        <input id="2" bind:group={selected} type="radio" name="amount" value="2" /> Y2
    </label>
    <label class="pr-6">
        <input id="3" bind:group={selected} type="radio" name="amount" value="3" /> Y3
    </label>
    <label class="pr-6">
        <input id="4" bind:group={selected} type="radio" name="amount" value="4" /> Y4
    </label>
</div>

<!-- Subjects Grid -->
<div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 pb-6">
    <!-- If Statements required to trigger animation - blame sveltekit -->
    {#if selected == 1}
        {#each year1 as subject}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => showSubjectPage(subject.index)} in:fade={{delay:150}} class="cursor-pointer hover:bg-emerald-50 hover:underline">
                <!-- Image -->
                <div class="aspect-w-3 aspect-h-4 sm:aspect-none h-24 ">
                    <img src={subject.imageUrl} alt="" class="w-full h-full object-cover sm:w-full sm:h-full">
                </div> 
                <!-- Title -->
                <div class="flex-1 p-4 space-y-2 flex flex-col">
                    <div class="flex-1 flex flex-col justify-end">
                        <p class="text-base font-medium text-gray-900">{subject.title} </p>
                    </div>
                </div>
                <!-- Description -->
                <div class="pb-4 px-4">
                    <p class="text-sm text-gray-500">{subject.description}</p>
                </div>
            </div>
        {/each}
    {:else if selected == 2}
        {#each year2 as subject}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => showSubjectPage(subject.index)} in:fade={{delay:150}} class="cursor-pointer hover:bg-emerald-50 hover:underline">
                <!-- Image -->
                <div class="aspect-w-3 aspect-h-4 sm:aspect-none h-24">
                    <img src={subject.imageUrl} alt="" class="w-full h-full object-cover sm:w-full sm:h-full">
                </div> 
                <!-- Title -->
                <div class="flex-1 p-4 space-y-2 flex flex-col">
                    <div class="flex-1 flex flex-col justify-end">
                        <p class="text-base font-medium text-gray-900">{subject.title}</p>
                    </div>
                </div>
                <!-- Description -->
                <div class="pb-4 px-4">
                    <p class="text-sm text-gray-500">{subject.description}</p>
                </div>
            </div>
        {/each}
    {:else if selected == 3}
        {#each year3 as subject}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => showSubjectPage(subject.index)} in:fade={{delay:150}} class="cursor-pointer hover:bg-emerald-50 hover:underline">
                <!-- Image -->
                <div class="aspect-w-3 aspect-h-4 sm:aspect-none h-24">
                    <img src={subject.imageUrl} alt="" class="w-full h-full object-cover sm:w-full sm:h-full">
                </div> 
                <!-- Title -->
                <div class="flex-1 p-4 space-y-2 flex flex-col">
                    <div class="flex-1 flex flex-col justify-end">
                        <p class="text-base font-medium text-gray-900">{subject.title}</p>
                    </div>
                </div>
                <!-- Description -->
                <div class="pb-4 px-4">
                    <p class="text-sm text-gray-500">{subject.description}</p>
                </div>
            </div>
        {/each}
    {:else if selected == 4}
        {#each year4 as subject}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => showSubjectPage(subject.index)} in:fade={{delay:150}} class="cursor-pointer hover:bg-emerald-50 hover:underline">
                <!-- Image -->
                <div class="aspect-w-3 aspect-h-4 sm:aspect-none h-24">
                    <img src={subject.imageUrl} alt="" class="w-full h-full object-cover sm:w-full sm:h-full">
                </div> 
                <!-- Title -->
                <div class="flex-1 p-4 space-y-2 flex flex-col">
                    <div class="flex-1 flex flex-col justify-end">
                        <p class="text-base font-medium text-gray-900">{subject.title}</p>
                    </div>
                </div>
                <!-- Description -->
                <div class="pb-4 px-4">
                    <p class="text-sm text-gray-500">{subject.description}</p>
                </div>
            </div>
        {/each}
    {/if}
</div>
{:else}

<div class="border-b">
    <h1 class="text-3xl tracking-tight sm:text-4xl p-6 lg:text-start underline">{subjectPage.year} - {subjectPage.subject.title}</h1>
    <p class="text-base text-gray-500 px-6 pb-6 lg:w-[800px] ">{subjectPage.subject.description}</p>
</div>

<nav class="flex px-5 py-3 text-gray-700 border-b bg-gray-50 sticky top-9" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
          Home
        </a>
      </li>
      <li>
        <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={() => clearSubjectPage()} class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 hover:underline cursor-pointer">Syllabus</div>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <span class="ml-1 text-sm font-medium text-blue-900 md:ml-2 ">{subjectPage.subject.title}</span>
        </div>
      </li>
    </ol>
</nav>

<div class="flex flex-col lg:flex-row-reverse justify-end pb-6">
    <aside class=" px-6 pt-6 lg:my-12 lg:h-full lg:sticky lg:top-[130px] pl-6 bg-white lg:border lg:ml-6 bg-gray-50">
        <h3 class="font-bold"> Table of Contents</h3>
        <ul class="pl-6 py-1 list-decimal  lg:border-none pb-6">
            {#each subjectPage.subject.learningObjectives as learningObjectives}
            <li class="text-blue-900 hover:text-black underline pb-1"><a href="#{learningObjectives.summary.toString().toLowerCase().replaceAll(" ", "-")}">{learningObjectives.summary}</a></li>
            {/each}
        </ul>
    </aside>

    <main class="lg:w-[720px] pt-6"> 
        
        {#each subjectPage.subject.learningObjectives as learningObjectives}
        <div class="pl-6 pb-6">
            <h2 id="#{learningObjectives.summary.toString().toLowerCase().replaceAll(" ", "-")}" class="text-xl p-3 underline font-bold">{learningObjectives.summary}</h2>
            <ul class="px-3 list-disc">
                {#each learningObjectives.details as details}
                <li class="pl-1">{details}</li>
                {/each}
            </ul>
        </div>
        {/each}

    </main>
</div>

{/if}

<script>
    import { fade } from "svelte/transition";

    // Select Year Navigation Logic
    let selected = 1;
    function onChange(event) {
        selected = event.currentTarget.value;
    }

    let subjectPage = null;

    // function showSubjectPage(index) {
    //     let data = { 
    //         year: "Year ".concat(selected.toString()),
    //         subject: course[selected-1][index]
    //     }
    //     subjectPage = data;
    // }

    function clearSubjectPage(year) {
        subjectPage = null
    }

    // Data
    const year1 = [
        {
            index: 0,
            title: "English",
            imageUrl: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The study of structure and use of the english language as related to the IELTS Exam.",
            // learningObjectives: [
            //     {
            //         summary: "Grammar, Vocabulary & Pronunciation",
            //         details: [
            //             "Review of grammar",
            //             "Remedial study of grammar",
            //             "Vocabulary building",
            //             "Phonetics (IPA)",
            //             "Public Speaking"
            //         ]
            //     },
            //     {
            //         summary: "Reading Comprehension",
            //         details: [
            //             "Read and comprehend prescribed course books."
            //         ]
            //     },
            //     {
            //         summary: "Listening Comprehension",
            //         details: [
            //             "Summarise various forms of audio such as speeches and telephone conversions."
            //         ]
            //     },
            //     {
            //         summary: "Workplace Writing Skills",
            //         details: [
            //             "Letter Writing",
            //             "Note Taking",
            //             "Precise Writing",
            //             "Nurses Notes",
            //             "Anecdotal Records",
            //             "Diary Writing",
            //             "Reports on health problems, etc.."
            //         ]

            //     },
            //     {
            //         summary: "Workplace Spoken Skills",
            //         details: [
            //             "Oral Reports",
            //             "Multiparty Discussion",
            //             "Formal Debate",
            //             "Telephone Conversions"
            //         ]
            //     }
            // ]
        },
        {
            index: 1,
            title: "Anatomy",
            imageUrl: "https://images.unsplash.com/photo-1623134915837-d2fdb4f59035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The structure of living organisms, including the organization of cells, tissues, and organs, and the relationships between different parts of the body.",
            // learningObjectives: [
            //     {
            //         summary: "Anatomical Organisation",
            //         details: [
            //             "Human cell structure",
            //             "Define tissue",
            //             "Different tissue types",
            //             "Tissue Function",
            //             "Tissue Classification",
            //             "Tissue Formation & Location",
            //             "Membrane Classification",
            //             "Membrane Structures",
            //             "Recognise how tissues and membranes are affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Skeletal System",
            //         details: [
            //             "Bone Types",
            //             "Bone Structures",
            //             "The Axial & Appendicular Skeleton",
            //             "Bone Growth & Formation",
            //             "Describing Bones",
            //             "Joint Classification",
            //             "Joint Structures",
            //             "Recognise how bones and joints are affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Muscular System",
            //         details: [
            //             "Muscle Types",
            //             "Muscle Structures",
            //             "Muscles moving bones",
            //             "Recognise how muscles are affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Nervous System",
            //         details: [
            //             "Structure & function of neurologia",
            //             "Structure & function of neurons",
            //             "Classification of nervous tissue and organs (somatic, autonomic)",
            //             "Structure & function of the spinal cord",
            //             "Structure & function of the cranial nerves",
            //             "Structure & function of the spinal nerves",
            //             "Structure & function of the peripheral nerves",
            //             "Comparison of of the parasympathetic and sympathetic systems",
            //             "Recognise how the nervous system is affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Sensory Organs",
            //         details: [
            //             "Structure & function of the skin",
            //             "Structure & function of the eyes",
            //             "Structure & function of the ears",
            //             "Structure & function of the nose",
            //             "Structure & function of the tongue",
            //             "Recognise how such sensory apparatus is affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Circulatory & Lymphatic Systems",
            //         details: [
            //             "Recall the function of the Circulatory System",
            //             "Blood Composition & Function",
            //             "Structure & Function of the heart",
            //             "Structure & Function of the aterial circuit",
            //             "Structure & Function of the venous circuit",
            //             "Describe and compare systemic, pulmonary and coronary circulation.",
            //             "Recall the function of the Lymphatic System",
            //             "Structure & Function of various lymphatic tissues",
            //             "Structure & Function of the Thymus gland",
            //             "Structure & Function of the Lymph nodes",
            //             "Structure & Function of the Lymphatic nodules",
            //             "Recognise how both circulatory and lymphatic systems are affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Respiratory System",
            //         details: [
            //             "Recall the function of the respiratory system",
            //             "Recall the main organs involves in respiration",
            //             "Structure & Function of the lungs",
            //             "The mechanics of ventilation",
            //             "Structure & Function of intercostal muscles",
            //             "Structure & Function of diaphram muscles",
            //             "Recognise how the respiratory system is affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Digestive System",
            //         details: [
            //             "Recall the function of the alimentary tract",
            //             "Structure of the alimentary tract",
            //             "The function of accessory organs involved in digestion",
            //             "Recognise how the digestive system is affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Excretory System",
            //         details: [
            //             "Structure & Function of the kidney",
            //             "Structure & Function of the ureters",
            //             "Structure & Function of the urethra",
            //             "Structure & Function of skin",
            //             "Recognise how the excretory system is affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Endocrine System",
            //         details: [
            //             "Structure & Function of the pituitary gland",
            //             "Structure & Function of the pancreas",
            //             "Structure & Function of the thyroid",
            //             "Structure & Function of parathyroid",
            //             "Structure & Function of thymus",
            //             "Structure & Function of adrenal gland",
            //             "Recognise how the endocrine function is affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
            //     {
            //         summary: "The Reproductive System & The Breast",
            //         details: [
            //             "Structure & Function of the female reproductive organs",
            //             "Structure & Function of the male reproductive organs",
            //             "Structure & Function of the breast",
            //             "Recognise how the reproductive organs and breast function are both affected by common diseases.",
            //             "Application of knowledge within a nursing role."
            //         ]
            //     },
                
            // ]
        },
        {
            index: 2,
            title: "Physiology",
            imageUrl: "https://images.unsplash.com/photo-1572625259782-94ac200efcdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "How living organisms function, including the processes that maintain life, such as respiration, circulation, and metabolism, as well as the body's responses to stimuli and the regulation of homeostasis."
        },
        {
            index: 3,
            title: "Nutrition",
            imageUrl: "https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The nutrients required for health and how they are obtained and used by the body. Including the biochemical processes involved in metabolism and the effects of different types of food on the body."
        },
        {
            index: 4,
            title: "Biochemistry",
            imageUrl: "https://images.unsplash.com/photo-1576670262660-05cf76d53da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The chemical processes that occur in living organisms, including the structure and function of biomolecules such as proteins, carbohydrates, and lipids, and the regulation of metabolic pathways."
        },
        {
            index: 5,
            title: "Nursing Foundations",
            imageUrl: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The principles and core practices of nursing, including patient care, patient communication, and teamwork within a healthcare setting."
        },
        {
            index: 6,
            title: "Psychology",
            imageUrl: "https://images.unsplash.com/photo-1612232134966-a9b076b9fbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The scientific study of the mind and behavior, including the underlying mental processes and the ways in which they influence behavior."
        },
        {
            index: 7,
            title: "Microbiology",
            imageUrl: "https://images.unsplash.com/photo-1631651368361-c8e3f4785fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The study of microorganisms, including bacteria, viruses, fungi, and parasites. Including their behavior, and interactions with other organisms, as well as their roles in health and disease."
        },
        {
            index: 8,
            title: "Workplace Computer Skills",
            imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The practical skills needed to use computers effectively in a professional setting. This includes skills such as word processing, spreadsheet creation, and data analysis, as well as knowledge of relevant software and hardware within a healthcare setting."
        },
    ];

    const year2 = [
        {
            index: 0,
            title: "Sociology",
            imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Society and the social interactions that take place within it. The analysis of social relationships, culture as related to clinical practice. Topics include social inequality, race and ethnicity, gender and sexuality, and social change in a healthcare setting."
        },
        {
            index: 1,
            title: "Pharmacology",
            imageUrl: "https://images.unsplash.com/photo-1543709533-c032159da7b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Drugs and their effects on the body. This includes the study of how drugs work, how they are metabolized, and their potential side effects."
        },
        {
            index: 2,
            title: "Pathology",
            imageUrl: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The study of disease, including the causes, development, and effects of different diseases. Within nursing pathology will be taught alongside anatomy in year 2."
        },
        {
            index: 3,
            title: "Genetics",
            imageUrl: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The study of genes, heredity, and the variation of inherited characteristics. Topics such as the genetic basis of inherited diseases, the evolution of species, and the genetic basis of behavior."
        },
        {
            index: 4,
            title: "Medical-Surgical Nursing",
            imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The practice of caring for patients in a variety of medical and surgical settings. Core skills taught include tasks such as administering medications, performing assessments, and providing education to patients and their families."
        },
        {
            index: 5,
            title: "Adult Nursing",
            imageUrl: "https://images.unsplash.com/photo-1550792436-181701c71f63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Core clinical skills related to adult patients within hospitals and clinics. Topics include administering medications, performing assessments, and providing education to patients and their families."
        },
        {
            index: 6,
            title: "Geriatric Nursing",
            imageUrl: "https://images.unsplash.com/photo-1626697556342-2310dbc55428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Core clinical skills related to older patients within hospitals and clinics. Topics include administering medications, performing assessments, and providing education to patients and their families."
        },
        {
            index: 7,
            title: "Community Nursing",
            imageUrl: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The study of the providing nursing care to individuals and families outside of the hospital. Topics based around clinical skills in a variety of settings, including schools, clinics, and patients' homes. "
        },
        {
            index: 8,
            title: "Workplace Communication",
            imageUrl: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The study and practice of effective communication in the workplace. This includes topics such as effective verbal and written communication, conflict resolution, and teamwork."
        },
    ];

    const year3 = [
        {
            index: 0,
            title: "Medical-Surgical Nursing",
            imageUrl: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The practice of caring for patients in a variety of medical and surgical settings. Core skills taught include tasks such as administering medications, performing assessments, and providing education to patients and their families."
        },
        {
            index: 1,
            title: "Adult Nursing",
            imageUrl: "https://images.unsplash.com/photo-1550792436-181701c71f63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Core clinical skills related to adult patients within hospitals and clinics. Topics include administering medications, performing assessments, and providing education to patients and their families."
        },
        {
            index: 2,
            title: "Geriatric Nursing",
            imageUrl: "https://images.unsplash.com/photo-1626697556342-2310dbc55428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Core clinical skills related to older patients within hospitals and clinics. Topics include administering medications, performing assessments, and providing education to patients and their families."
        },
        {
            index: 3,
            title: "Child Health Nursing",
            imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The practice of caring for children in hospitals and clinics, and how it affects the role of nurse when administering medications, performing assessments, and providing education."
        },
        {
            index: 4,
            title: "Mental Health Nursing",
            imageUrl: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The study of practice of caring for individuals with mental health conditions. Including  topics such as safeguarding procedures, dealing with issues of patient capacity and empathy as related to nursing care provision."
        },
        {
            index: 5,
            title: "Midwifery",
            imageUrl: "https://images.unsplash.com/photo-1597807197258-3272e1808b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Midwifery is the practice of providing care to women during pregnancy, childbirth, and the postpartum period. Topics include the physiology of pregnancy, the anatomy of sex organs and the care specific to this part of life."
        },
        {
            index: 6,
            title: "Obstetrical Nursing",
            imageUrl: "https://images.unsplash.com/photo-1560306580-9e204fe45f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Obstetrical nursing includes assisting with labor and delivery, and providing postpartum care. Also includes the practice of educating expectant mothers and their families about pregnancy, childbirth, and newborn care."
        },
    ];

    const year4 = [
        {
            index: 0,
            title: "Midwifery",
            imageUrl: "https://images.unsplash.com/photo-1597807197258-3272e1808b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Midwifery is the practice of providing care to women during pregnancy, childbirth, and the postpartum period. Topics include the physiology of pregnancy, the anatomy of sex organs and the care specific to this part of life."
        },
        {
            index: 1,
            title: "Obstetrical Nursing",
            imageUrl: "https://images.unsplash.com/photo-1560306580-9e204fe45f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "Obstetrical nursing includes assisting with labor and delivery, and providing postpartum care. Also includes the practice of educating expectant mothers and their families about pregnancy, childbirth, and newborn care."
        },
        {
            index: 2,
            title: "Community Nursing",
            imageUrl: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The study of the providing nursing care to individuals and families outside of the hospital. Topics based around clinical skills in a variety of settings, including schools, clinics, and patients' homes. "
        },
        {
            index: 3,
            title: "Nursing Research & Statistics",
            imageUrl: "https://images.unsplash.com/photo-1546017535-ed107a04ac7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The study of nursing practices and the use of statistical methods to analyze and interpret data. This may include conducting research to investigate and understand the effectiveness of different nursing interventions or to identify trends and patterns in healthcare data. Often involves collection and analysis of data from a variety of sources, including patient records, surveys."
        },
        {
            index: 4,
            title: "Management of Nursing Services & Education",
            imageUrl: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
            description: "The managerial role of nursing in healthcare. This may include managing budgets, staffing, and operations, as well as developing and implementing policies and procedures, representing the nursing staff to senior leadership. The most common however includes coordinating care with other healthcare providers, and advocating for the needs of patients."
        },
    ];

    const course = [year1, year2, year3, year4]
</script>