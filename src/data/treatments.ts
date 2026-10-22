export interface Treatment {
  slug: string; name: string; title: string; intro: string; lead: string;
  sections: { id?: string; title: string; paragraphs: string[]; link?: { href: string; label: string } }[];
  questions: { question: string; answer: string }[];
  related: string[];
}
export const treatments: Treatment[] = [
  {
    slug: 'metal-braces', name: 'Metal Braces', title: 'Metal Braces in East Memphis',
    intro: 'A familiar approach, with a plan made for your smile. Dr. Rachel Hoffman offers metal braces for children, teens, and adults.',
    lead: 'Brackets and a connecting wire apply controlled pressure to move teeth over time. Because braces stay in place, you do not need to remember to put them back in after meals.',
    sections: [
      { title: 'Start with the Whole Picture', paragraphs: ['Your consultation looks at the way your teeth meet as well as how they look. Photos, X-rays, and an exam help Dr. Rachel explain whether metal braces are a good fit and what treatment would involve. In some cases, digital 3D scans are taken as well.', 'We will talk through your goals, your daily routine, and any other options worth considering. The right plan depends on your individual teeth and bite.'] },
      { title: 'Living with Braces', paragraphs: ['Our team will show you how to clean around brackets and wires and which foods to avoid. Making those habits part of your day helps keep your treatment on track.', 'You will return for adjustments and progress checks. If a bracket loosens or a wire starts bothering you between appointments, call the office so we can advise you.'] },
      { title: 'Planning the Time and Cost', paragraphs: ['Dr. Rachel will discuss an expected timeline after your exam. Treatment fees and estimated insurance benefits are reviewed for your plan, with flexible payment options available. Your first consultation is complimentary.'] },
    ],
    questions: [{ question: 'Are metal braces only for children?', answer: 'No. We offer metal braces for adults as well as younger patients. Your orthodontic needs, oral health, and preferences help guide the recommendation.' }, { question: 'What happens after braces come off?', answer: 'Retainers help maintain the position of your teeth after active treatment. Dr. Rachel will explain the type of retainer and wearing schedule for your smile.' }],
    related: ['esthetic-braces','teen-orthodontics','retainers'],
  },
  {
    slug: 'esthetic-braces', name: 'Esthetic Braces', title: 'Esthetic Braces in East Memphis',
    intro: 'Explore ceramic braces and Iconix rose-gold brackets with board-certified orthodontist Dr. Rachel Hoffman. Two esthetic options, with a treatment plan tailored to your smile.',
    lead: 'Esthetic braces offer another look for your orthodontic treatment. Compare tooth-colored ceramic brackets with the warm, rose-gold finish of Iconix brackets at your complimentary consultation.',
    sections: [
      { id: 'ceramic-braces', title: 'Ceramic Braces', paragraphs: ['Clear or tooth-colored ceramic brackets blend with your teeth for a less noticeable appearance. They stay attached throughout treatment and guide tooth movement with brackets and wires.', 'If you prefer a less visible appliance but do not want removable trays, ceramic braces may be an option. Dr. Rachel will review your bite, treatment goals, and the movements needed before making a recommendation.'] },
      { id: 'iconix-rose-gold', title: 'Iconix Rose-Gold Brackets', paragraphs: ['Iconix brackets offer a rose-gold finish and another esthetic option alongside ceramic braces. They use brackets and wires as part of a personalized treatment plan.', 'Dr. Rachel can help you compare ceramic and Iconix brackets, discuss their appearance, and explain which options fit your smile and daily routine.'] },
      { title: 'A Thoughtful Daily Routine', paragraphs: ['Both options need careful cleaning around the brackets and wire. Our team will show you how to brush and floss, discuss food precautions, and answer questions about keeping your appliance looking its best.', 'Regular visits let Dr. Rachel check progress and make adjustments. Tell us if something feels loose or uncomfortable rather than waiting until your next visit.'] },
      { title: 'Understand Your Plan before Starting', paragraphs: ['Your exam determines the treatment approach and expected duration. We will walk through your personalized fee, insurance questions, and flexible payment options at your complimentary consultation.'] },
    ],
    questions: [{ question: 'Are ceramic braces the same as clear aligners?', answer: 'No. Ceramic braces are brackets and wires that stay attached to your teeth. Clear aligners are removable trays. Both are available here, and Dr. Rachel can explain which options suit you.' }, { question: 'Will ceramic braces take longer?', answer: 'Treatment time depends on your teeth, bite, and treatment plan. The appearance of an appliance alone does not determine your timeline.' }],
    related: ['metal-braces','angel-aligners','adult-orthodontics'],
  },
  {
    slug: 'angel-aligners', name: 'Angel Aligner™', title: 'Angel Aligner™ in East Memphis',
    intro: 'Clear aligners with personal attention from Dr. Rachel Hoffman. Our East Memphis practice uses Angel Aligner™ for clear-aligner treatment.',
    lead: 'Angel Aligner™ clear aligners are custom removable trays used as part of an orthodontic treatment plan. Our practice also offers metal braces, ceramic braces, and Iconix rose-gold brackets.',
    sections: [
      { title: 'A Conversation about Your Options', paragraphs: ['Tell us what matters to you: the look of your appliance, how it fits into meals and work, and what you hope to change about your smile. Dr. Rachel will examine your teeth and explain which approaches could address those goals.', 'Your complimentary consultation includes photos, X-rays, and an orthodontic exam, with digital 3D scans taken in some cases. The recommendation comes from that full assessment.'] },
      { title: 'Care between Appointments', paragraphs: ['You will follow a prescribed wearing and tray-change schedule and return so Dr. Rachel can assess your progress. Our team will explain cleaning, storage, and what to do if a tray is lost or damaged.', 'Bring up concerns early, including any trouble following the routine. Knowing what is happening at home helps us support your treatment.'] },
      { title: 'Understand Your Treatment Plan', paragraphs: ['Dr. Rachel will explain whether Angel Aligner™ clear aligners are appropriate for your smile. Ask about the treatment approach, expected visits, total fee, and what is included in your particular plan.'] },
    ],
    questions: [{ question: 'Does Hoffman Family Orthodontics offer Angel Aligner™?', answer: 'Yes. Our East Memphis practice uses Angel Aligner™ for clear-aligner treatment. An exam determines whether clear aligners are appropriate for you.' }, { question: 'Can I compare Angel Aligner™ clear aligners with braces?', answer: 'Absolutely. Dr. Rachel will explain the suitable options for your bite and daily routine, including fixed braces and removable aligners.' }],
    related: ['esthetic-braces','adult-orthodontics','retainers'],
  },
  {
    slug: 'early-treatment', name: 'Orthodontics for Children', title: 'Age 7 Orthodontic Visits in East Memphis',
    intro: 'A first look at a growing smile. Dr. Rachel Hoffman helps families understand when to watch, when to wait, and when treatment may help.',
    lead: 'The American Association of Orthodontists recommends a first orthodontic check by age 7. An early evaluation does not automatically mean a child needs braces.',
    sections: [
      { title: 'Why Take a Look at Age 7?', paragraphs: ['With a mix of baby and permanent teeth, an orthodontist can assess the developing bite and tooth eruption. That early picture helps identify concerns that may benefit from attention while a child is growing.', 'Dr. Rachel will explain what she sees in plain language. If treatment is not needed now, the next step may be observation and a later review.'] },
      { title: 'A Visit for Parents and Children', paragraphs: ['Your child can get to know the office while you discuss concerns about spacing, crowding, or the way the teeth meet. Our team will walk you through the appointment and make room for questions.', 'Bring relevant dental information and let us know if your dentist has raised a particular concern. A referral is welcome but is not required to arrange a consultation.'] },
      { title: 'Planning for the Years Ahead', paragraphs: ['If early treatment is recommended, ask what it aims to address now and what may still need attention later. Some children need additional orthodontic treatment as more permanent teeth come in. We will explain the proposed steps and costs before you decide.'] },
    ],
    questions: [{ question: 'Should I wait until all the baby teeth are gone?', answer: 'You do not need to wait for a first evaluation. The AAO recommends a check by age 7, and you can contact us sooner if you or your dentist notice a concern.' }, { question: 'Is the first consultation complimentary?', answer: 'Yes. Our first consultation is complimentary and gives your family a chance to meet Dr. Rachel and understand the recommended next steps.' }],
    related: ['teen-orthodontics','metal-braces','retainers'],
  },
  {
    slug: 'teen-orthodontics', name: 'Orthodontics for Teens', title: 'Teen Orthodontics in East Memphis',
    intro: 'Treatment that makes sense for a teenager’s teeth and everyday life, with Dr. Rachel Hoffman.',
    lead: 'School, sports, music, and meals all belong in the conversation. We offer metal braces, ceramic braces, Iconix rose-gold brackets, and Angel Aligner™ clear aligners, with recommendations based on the individual smile.',
    sections: [
      { title: 'Include Your Teen in the Decision', paragraphs: ['At the first consultation, Dr. Rachel explains the findings and suitable treatment options to both teens and parents. We want your teen to understand what each approach asks of them, from cleaning around braces to remembering aligner wear.', 'Talk with us about appearance, comfort, activities, and any worries about treatment. Those questions are part of making a workable plan.'] },
      { title: 'Keep the Routine Practical', paragraphs: ['Braces need food precautions and careful cleaning. Aligners need consistent wear and a place to store trays during meals. Our team will demonstrate the steps for the chosen appliance.', 'Teens can continue sports and music during orthodontic care. Ask us about an appropriate mouthguard and any adjustment period for playing an instrument.'] },
      { title: 'Plan Appointments Together', paragraphs: ['Progress visits are part of treatment with braces and aligners. Our office is open Monday through Thursday, 8 a.m. to 5 p.m. Central; call to discuss available times around school.', 'We will review the expected treatment length, estimated insurance benefits, and flexible payment options with you. After active treatment, retainers help maintain the result.'] },
    ],
    questions: [{ question: 'Can a teen choose clear aligners?', answer: 'Clear aligners may be an option when appropriate for the bite and when the wearing routine is workable. Dr. Rachel will evaluate those factors and explain alternatives.' }, { question: 'Do we still need the family dentist?', answer: 'Yes. Keep up with dental checkups and cleanings throughout orthodontic treatment, following the schedule your dentist recommends.' }],
    related: ['metal-braces','esthetic-braces','angel-aligners'],
  },
  {
    slug: 'adult-orthodontics', name: 'Orthodontics for Adults', title: 'Adult Orthodontics in East Memphis',
    intro: 'Whether this is your first orthodontic visit or you have had treatment before, Dr. Rachel Hoffman will help you explore your options.',
    lead: 'There is no single age cutoff for orthodontic care. The condition of your teeth, gums, and supporting bone matters when deciding what treatment is appropriate.',
    sections: [
      { title: 'Start with Your Priorities', paragraphs: ['You may want to address crowding, spacing, a bite concern, or teeth that have shifted since earlier treatment. Your consultation gives Dr. Rachel a chance to examine your smile and hear what you would like to change.', 'Tell us about any previous braces, retainers, dental work, or ongoing care with your general dentist. That history helps shape the discussion.'] },
      { title: 'Compare Everyday Tradeoffs', paragraphs: ['Our options include metal braces, tooth-colored ceramic braces, Iconix rose-gold brackets, and Angel Aligner™ clear aligners. We will explain the approaches that fit your needs and what their routines look like.', 'Removable trays require consistent wear; fixed braces require cleaning around brackets and some food precautions. The most discreet appliance is only useful if it also supports your treatment plan and daily habits.'] },
      { title: 'Make an Informed Decision', paragraphs: ['Ask about the expected number of visits, treatment duration, payment options, and whether your insurance includes adult orthodontic benefits. Your consultation is complimentary.', 'Continue your regular dental care during treatment. If other dental work is needed, Dr. Rachel can discuss how it fits into the sequence of your care.'] },
    ],
    questions: [{ question: 'Can I have treatment again if my teeth have shifted?', answer: 'An evaluation can help identify why your teeth have moved and what options may be appropriate. Bring any existing retainers and tell us about your previous treatment.' }, { question: 'Will I need retainers afterward?', answer: 'Yes, maintaining tooth position is part of the plan after active treatment. Dr. Rachel will provide instructions for your retainers and follow-up care.' }],
    related: ['esthetic-braces','angel-aligners','retainers'],
  },
  {
    slug: 'retainers', name: 'Retainers', title: 'Retainers in East Memphis',
    intro: 'Keep caring for the smile you worked toward. Dr. Rachel Hoffman provides custom retainers and guidance after active treatment.',
    lead: 'Finishing braces or aligners is a milestone. Retainers help hold teeth in their new positions, and ongoing wear is an important part of maintaining your results.',
    sections: [
      { title: 'Your Wearing Schedule Is Personal', paragraphs: ['Dr. Rachel will explain the retainer chosen for you and when to wear it. Follow those instructions instead of comparing your schedule with someone else’s.', 'Long-term retention matters because teeth can shift over time. Let us know if you are struggling to keep up with the routine so we can help you work through it.'] },
      { title: 'Keep It Clean and Protected', paragraphs: ['Our team will show you how to clean and care for your particular retainer. Use its case when it is out of your mouth, and follow the cleaning instructions provided at your visit.', 'Bring your retainer when requested for a check. If its fit changes, tell us rather than making an adjustment yourself.'] },
      { title: 'Lost, Damaged, or No Longer Fitting?', paragraphs: ['Call 901.625.0202 for guidance and to arrange an assessment if needed. Do not force a painful or distorted retainer into place.', 'If you have had orthodontic treatment elsewhere, explain your history when you call. We can discuss a visit to evaluate your current smile and retainer needs.'] },
      { title: 'Our Lifetime Retainer Program', paragraphs: ['We offer a Lifetime Retainer Program to help take the stress out of lost or damaged retainers. Contact our team to learn more about the program and how to enroll.'], link: { href: '/contact/', label: 'Ask About the Lifetime Retainer Program' } },
    ],
    questions: [{ question: 'Can I stop wearing retainers once my teeth feel stable?', answer: 'Continue the schedule Dr. Rachel gives you. Retainer wear is a long-term part of maintaining alignment, even when your teeth appear settled.' }, { question: 'How much does a replacement retainer cost?', answer: 'Contact the office for an estimate based on the retainer and assessment you need. We will explain the replacement fee before you decide to order.' }],
    related: ['adult-orthodontics','angel-aligners','metal-braces'],
  },
];
