export interface Treatment {
  slug: string; name: string; title: string; intro: string; lead: string;
  sections: { title: string; paragraphs: string[] }[];
  questions: { question: string; answer: string }[];
  related: string[];
}
export const treatments: Treatment[] = [
  {
    slug: 'metal-braces', name: 'Metal braces', title: 'Metal braces in East Memphis',
    intro: 'A familiar approach, with a plan made for your smile. Dr. Rachel Hoffman offers metal braces for children, teens, and adults.',
    lead: 'Brackets and a connecting wire apply controlled pressure to move teeth over time. Because braces stay in place, you do not need to remember to put them back in after meals.',
    sections: [
      { title: 'Start with the whole picture', paragraphs: ['Your consultation looks at the way your teeth meet as well as how they look. Photos, digital scans, X-rays, and an exam help Dr. Rachel explain whether metal braces are a good fit and what treatment would involve.', 'We will talk through your goals, your daily routine, and any other options worth considering. The right plan depends on your individual teeth and bite.'] },
      { title: 'Living with braces', paragraphs: ['Our team will show you how to clean around brackets and wires and which foods to avoid. Making those habits part of your day helps keep your treatment on track.', 'You will return for adjustments and progress checks. If a bracket loosens or a wire starts bothering you between appointments, call the office so we can advise you.'] },
      { title: 'Planning the time and cost', paragraphs: ['Dr. Rachel will discuss an expected timeline after your exam. Treatment fees and insurance benefits are reviewed for your plan, with flexible payment options available. Your first consultation is complimentary.'] },
    ],
    questions: [{ question: 'Are metal braces only for children?', answer: 'No. We offer metal braces for adults as well as younger patients. Your orthodontic needs, oral health, and preferences help guide the recommendation.' }, { question: 'What happens after braces come off?', answer: 'Retainers help maintain the position of your teeth after active treatment. Dr. Rachel will explain the type of retainer and wearing schedule for your smile.' }],
    related: ['ceramic-braces','teen-orthodontics','retainers'],
  },
  {
    slug: 'ceramic-braces', name: 'Ceramic braces', title: 'Ceramic braces in East Memphis',
    intro: 'Tooth-colored brackets offer a quieter look. Explore ceramic braces with board-certified orthodontist Dr. Rachel Hoffman.',
    lead: 'Ceramic braces use clear or tooth-colored brackets that blend with your teeth. They remain attached throughout treatment, combining a less noticeable appearance with the day-to-day routine of braces.',
    sections: [
      { title: 'An option worth comparing', paragraphs: ['If you prefer a less visible appliance but do not want removable trays, ceramic braces may be an option. Dr. Rachel will review your bite, treatment goals, and the movements needed before making a recommendation.', 'Your consultation is also a chance to compare ceramic braces, metal braces, and clear aligners side by side. We will explain the practical differences for your own treatment.'] },
      { title: 'A thoughtful daily routine', paragraphs: ['Ceramic braces still need careful cleaning around the brackets and wire. Our team will show you how to brush and floss, discuss food precautions, and answer questions about keeping your appliance looking its best.', 'Regular visits let Dr. Rachel check progress and make adjustments. Tell us if something feels loose or uncomfortable rather than waiting until your next visit.'] },
      { title: 'Understand your plan before starting', paragraphs: ['Your exam determines the treatment approach and expected duration. We will walk through your personalized fee, insurance questions, and flexible payment options at your complimentary consultation.'] },
    ],
    questions: [{ question: 'Are ceramic braces the same as clear aligners?', answer: 'No. Ceramic braces are brackets and wires that stay attached to your teeth. Clear aligners are removable trays. Both are available here, and Dr. Rachel can explain which options suit you.' }, { question: 'Will ceramic braces take longer?', answer: 'Treatment time depends on your teeth, bite, and treatment plan. The appearance of an appliance alone does not determine your timeline.' }],
    related: ['metal-braces','invisalign','adult-orthodontics'],
  },
  {
    slug: 'invisalign', name: 'Invisalign®', title: 'Invisalign in East Memphis',
    intro: 'Removable clear aligners, with care guided by Dr. Rachel Hoffman. Find out whether Invisalign fits your smile and your routine.',
    lead: 'Invisalign uses a sequence of custom clear trays to move teeth gradually. You remove the trays for meals and oral hygiene, then wear them according to your treatment instructions.',
    sections: [
      { title: 'The plan comes first', paragraphs: ['At your complimentary consultation, Dr. Rachel examines your teeth and bite and discusses what you would like to change. She will explain whether aligners are appropriate and compare them with braces when helpful.', 'We use digital scans as part of treatment planning. The number of trays, any additional appliances, and the expected timeline depend on your needs.'] },
      { title: 'Make room for the routine', paragraphs: ['Clear aligners rely on consistent wear. You will receive instructions about daily wear, cleaning, and when to change to the next tray. Keep your aligners in their case when they are out, and bring questions to your progress visits.', 'A removable appliance still needs professional follow-up. Contact us if a tray is lost, damaged, or no longer fitting properly so we can guide your next step.'] },
      { title: 'Invisalign or Angel Aligners?', paragraphs: ['Our practice offers both systems. A brand name alone cannot tell you which is right for your bite. Dr. Rachel will discuss the options relevant to your plan, including the cost and wearing routine, before you decide.'] },
    ],
    questions: [{ question: 'Are clear aligners always faster than braces?', answer: 'No. Timing depends on the movements your teeth need and how your treatment progresses. Dr. Rachel will give you an individualized estimate after the exam.' }, { question: 'Can I ask about insurance for Invisalign?', answer: 'Yes. Bring your dental insurance information so our team can review any orthodontic benefits and explain your expected share of the cost.' }],
    related: ['angel-aligners','ceramic-braces','retainers'],
  },
  {
    slug: 'angel-aligners', name: 'Angel Aligners', title: 'Angel Aligners in East Memphis',
    intro: 'Another clear-aligner option, with the same personal attention from Dr. Rachel Hoffman at our East Memphis office.',
    lead: 'Angel Aligners are custom removable trays used as part of an orthodontic treatment plan. Our practice offers them alongside Invisalign, metal braces, and ceramic braces.',
    sections: [
      { title: 'A conversation about your options', paragraphs: ['Tell us what matters to you: the look of your appliance, how it fits into meals and work, and what you hope to change about your smile. Dr. Rachel will examine your teeth and explain which approaches could address those goals.', 'Your complimentary consultation includes photos, digital scans, X-rays, and an orthodontic exam. The recommendation comes from that full assessment.'] },
      { title: 'Care between appointments', paragraphs: ['You will follow a prescribed wearing and tray-change schedule and return so Dr. Rachel can assess your progress. Our team will explain cleaning, storage, and what to do if a tray is lost or damaged.', 'Bring up concerns early, including any trouble following the routine. Knowing what is happening at home helps us support your treatment.'] },
      { title: 'Compare the plan, not just the name', paragraphs: ['Invisalign and Angel Aligners are separate systems offered by our office. We do not recommend choosing on brand recognition alone. Ask about the treatment approach, expected visits, total fee, and what is included in your particular plan.'] },
    ],
    questions: [{ question: 'Does Hoffman Family Orthodontics offer Angel Aligners?', answer: 'Yes. Angel Aligners are one of the clear-aligner options offered at our East Memphis practice. An exam determines whether they are appropriate for you.' }, { question: 'Can I compare Angel Aligners with braces?', answer: 'Absolutely. Dr. Rachel will explain the suitable options for your bite and daily routine, including fixed braces and removable aligners.' }],
    related: ['invisalign','adult-orthodontics','retainers'],
  },
  {
    slug: 'early-treatment', name: 'Early treatment for children', title: 'Age 7 orthodontic visits in East Memphis',
    intro: 'A first look at a growing smile. Dr. Rachel Hoffman helps families understand when to watch, when to wait, and when treatment may help.',
    lead: 'The American Association of Orthodontists recommends a first orthodontic check by age 7. An early evaluation does not automatically mean a child needs braces.',
    sections: [
      { title: 'Why take a look at age 7?', paragraphs: ['With a mix of baby and permanent teeth, an orthodontist can assess the developing bite and tooth eruption. That early picture helps identify concerns that may benefit from attention while a child is growing.', 'Dr. Rachel will explain what she sees in plain language. If treatment is not needed now, the next step may be observation and a later review.'] },
      { title: 'A visit for parents and children', paragraphs: ['Your child can get to know the office while you discuss concerns about spacing, crowding, or the way the teeth meet. Our team will walk you through the appointment and make room for questions.', 'Bring relevant dental information and let us know if your dentist has raised a particular concern. A referral is welcome but is not required to arrange a consultation.'] },
      { title: 'Planning for the years ahead', paragraphs: ['If early treatment is recommended, ask what it aims to address now and what may still need attention later. Some children need additional orthodontic treatment as more permanent teeth come in. We will explain the proposed steps and costs before you decide.'] },
    ],
    questions: [{ question: 'Should I wait until all the baby teeth are gone?', answer: 'You do not need to wait for a first evaluation. The AAO recommends a check by age 7, and you can contact us sooner if you or your dentist notice a concern.' }, { question: 'Is the first consultation complimentary?', answer: 'Yes. Our first consultation is complimentary and gives your family a chance to meet Dr. Rachel and understand the recommended next steps.' }],
    related: ['teen-orthodontics','metal-braces','retainers'],
  },
  {
    slug: 'teen-orthodontics', name: 'Teen orthodontics', title: 'Teen orthodontics in East Memphis',
    intro: 'Treatment that makes sense for a teenager’s teeth and everyday life, with Dr. Rachel Hoffman.',
    lead: 'School, sports, music, and meals all belong in the conversation. We offer metal braces, ceramic braces, and clear aligners, with recommendations based on the individual smile.',
    sections: [
      { title: 'Include your teen in the decision', paragraphs: ['At the first consultation, Dr. Rachel explains the findings and suitable treatment options to both teens and parents. We want your teen to understand what each approach asks of them, from cleaning around braces to remembering aligner wear.', 'Talk with us about appearance, comfort, activities, and any worries about treatment. Those questions are part of making a workable plan.'] },
      { title: 'Keep the routine practical', paragraphs: ['Braces need food precautions and careful cleaning. Aligners need consistent wear and a place to store trays during meals. Our team will demonstrate the steps for the chosen appliance.', 'Teens can continue sports and music during orthodontic care. Ask us about an appropriate mouthguard and any adjustment period for playing an instrument.'] },
      { title: 'Plan appointments together', paragraphs: ['Progress visits are part of treatment with braces and aligners. Our office is open Monday through Thursday, 8 a.m. to 5 p.m. Central; call to discuss available times around school.', 'We will review the expected treatment length, insurance benefits, and flexible payment options with you. After active treatment, retainers help maintain the result.'] },
    ],
    questions: [{ question: 'Can a teen choose clear aligners?', answer: 'Clear aligners may be an option when appropriate for the bite and when the wearing routine is workable. Dr. Rachel will evaluate those factors and explain alternatives.' }, { question: 'Do we still need the family dentist?', answer: 'Yes. Keep up with dental checkups and cleanings throughout orthodontic treatment, following the schedule your dentist recommends.' }],
    related: ['metal-braces','ceramic-braces','invisalign'],
  },
  {
    slug: 'adult-orthodontics', name: 'Adult orthodontics', title: 'Adult orthodontics in East Memphis',
    intro: 'Whether this is your first orthodontic visit or you have had treatment before, Dr. Rachel Hoffman will help you explore your options.',
    lead: 'There is no single age cutoff for orthodontic care. The condition of your teeth, gums, and supporting bone matters when deciding what treatment is appropriate.',
    sections: [
      { title: 'Start with your priorities', paragraphs: ['You may want to address crowding, spacing, a bite concern, or teeth that have shifted since earlier treatment. Your consultation gives Dr. Rachel a chance to examine your smile and hear what you would like to change.', 'Tell us about any previous braces, retainers, dental work, or ongoing care with your general dentist. That history helps shape the discussion.'] },
      { title: 'Compare everyday tradeoffs', paragraphs: ['Our options include metal braces, tooth-colored ceramic braces, Invisalign, and Angel Aligners. We will explain the approaches that fit your needs and what their routines look like.', 'Removable trays require consistent wear; fixed braces require cleaning around brackets and some food precautions. The most discreet appliance is only useful if it also supports your treatment plan and daily habits.'] },
      { title: 'Make an informed decision', paragraphs: ['Ask about the expected number of visits, treatment duration, payment options, and whether your insurance includes adult orthodontic benefits. Your consultation is complimentary.', 'Continue your regular dental care during treatment. If other dental work is needed, Dr. Rachel can discuss how it fits into the sequence of your care.'] },
    ],
    questions: [{ question: 'Can I have treatment again if my teeth have shifted?', answer: 'An evaluation can help identify why your teeth have moved and what options may be appropriate. Bring any existing retainers and tell us about your previous treatment.' }, { question: 'Will I need retainers afterward?', answer: 'Yes, maintaining tooth position is part of the plan after active treatment. Dr. Rachel will provide instructions for your retainers and follow-up care.' }],
    related: ['ceramic-braces','angel-aligners','retainers'],
  },
  {
    slug: 'retainers', name: 'Retainers', title: 'Retainers in East Memphis',
    intro: 'Keep caring for the smile you worked toward. Dr. Rachel Hoffman provides custom retainers and guidance after active treatment.',
    lead: 'Finishing braces or aligners is a milestone. Retainers help hold teeth in their new positions, and ongoing wear is an important part of maintaining your results.',
    sections: [
      { title: 'Your wearing schedule is personal', paragraphs: ['Dr. Rachel will explain the retainer chosen for you and when to wear it. Follow those instructions instead of comparing your schedule with someone else’s.', 'Long-term retention matters because teeth can shift over time. Let us know if you are struggling to keep up with the routine so we can help you work through it.'] },
      { title: 'Keep it clean and protected', paragraphs: ['Our team will show you how to clean and care for your particular retainer. Use its case when it is out of your mouth, and follow the cleaning instructions provided at your visit.', 'Bring your retainer when requested for a check. If its fit changes, tell us rather than making an adjustment yourself.'] },
      { title: 'Lost, damaged, or no longer fitting?', paragraphs: ['Call 901.625.0202 for guidance and to arrange an assessment if needed. Do not force a painful or distorted retainer into place.', 'If you have had orthodontic treatment elsewhere, explain your history when you call. We can discuss a visit to evaluate your current smile and retainer needs.'] },
    ],
    questions: [{ question: 'Can I stop wearing retainers once my teeth feel stable?', answer: 'Continue the schedule Dr. Rachel gives you. Retainer wear is a long-term part of maintaining alignment, even when your teeth appear settled.' }, { question: 'How much does a replacement retainer cost?', answer: 'Contact the office for an estimate based on the retainer and assessment you need. We will explain the replacement fee before you decide to order.' }],
    related: ['adult-orthodontics','invisalign','metal-braces'],
  },
];
