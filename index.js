const TECHNIQUES = [
    { category: "Basic Techniques", name: "Empathy", weight: 1, description: "When we're upset, we need someone to listen and see the world through our eyes without trying to cheer us up, help us, or give us advice. Although this won't usually lead to a cure, it can be a relief to know that someone's listening." },
    { category: "Basic Techniques", name: "Agenda Setting", weight: 1, description: "Agenda Setting is the most basic and important technique of all. First, try to define the problem you want help with. It must be real and specific as to person, place, and time. Ask yourself, \"When was I upset? What time of day was it? Where was I? Who was I interacting with? What was going on?\" Now ask yourself if you're willing to roll up your sleeves and work on it now, rather than just talking about it endlessly. Ask yourself, \"What would it be worth to me to solve this problem? How hard would I be willing to work on the solution?\"" },
    { category: "Basic Techniques", name: "Identify the Distortions", weight: 1, description: "Use the Checklist of Cognitive Distortions to identify the distortions in each negative thought." },
    { category: "Basic Techniques", name: "Straightforward Technique", weight: 7, description: "Try to substitute a more positive and realistic thought for each negative thought. Ask yourself, \"Is this negative thought really true? Do I really believe it? Is there another way to look at the situation?\"" },
    { category: "Compassion-Based Techniques", name: "Double Standard Technique", weight: 7, description: "Instead of putting yourself down, talk to yourself in the same compassionate way you might talk to a dear friend who was upset. Ask yourself, \"Would I say such harsh things to a friend with a similar problem? If not, why not? What would I say to him or her?\"" },
    { category: "Truth-Based Techniques", name: "Examine the Evidence", weight: 7, description: "Instead of assuming that your negative thought is true, examine the evidence for it. Ask yourself, \"What are the facts? What do they show?\"" },
    { category: "Truth-Based Techniques", name: "Experimental Technique", weight: 1, description: "Do an experiment to test the validity of your negative thought, in much the same way that a scientist would test a theory. Ask yourself, \"How could I test this negative thought to find out if it's really true?\" For example, if you believe you're on the verge of losing control and cracking up during your panic attacks, you can test this belief by trying to drive yourself crazy through willful effort. You can roll around on the floor, flail your arms and legs in the air, and speak gibberish. It can be a relief to discover that you can't go crazy, no matter how hard you try." },
    { category: "Truth-Based Techniques", name: "Survey Technique", weight: 1, description: "Conduct a survey to find out if your thoughts are realistic. Ask yourself, \"How do other people think and feel about this? Could I ask some friends and get some feedback?\" For example, if you believe that social anxiety is rare or shameful, you could simply ask several friends if they've ever felt that way." },
    { category: "Truth-Based Techniques", name: "Reattribution", weight: 1, description: "Instead of blaming yourself entirely for a problem, think about the many factors that contributed to it. Ask yourself, \"What caused this problem? What did I contribute and what did others contribute? What can I learn from the situation?\"" },
    { category: "Logic-Based Techniques", name: "Socratic Method", weight: 7, description: "Ask yourself questions that will lead to the inconsistencies in your negative thoughts. For example, you might ask yourself, \"When I say that I'm a 'failure at life,' do I mean that I fail at some things some of the time, or all things all of the time?\" If you say, \"some things some of the time,\" you can point out that this is true of all human beings. If you say, \"all things all of the time,\" you can point out that this isn't true of anyone, since no one fails at everything." },
    { category: "Logic-Based Techniques", name: "Thinking in Shades of Gray", weight: 7, description: "Instead of thinking about your problems in black-and-white categories, you can evaluate them in shades of gray. When things don't work out as well as you'd hoped, you can think of the experience as a partial success or learning opportunity. Pinpoint your specific errors instead of writing yourself off as a total failure." },
    { category: "Semantic Techniques", name: "Semantic Method", weight: 7, description: "Substitute language that's less colorful and emotionally loaded. Instead of thinking, \"I shouldn't have made that mistake,\" you can tell yourself, \"It would be preferable if I hadn't made that mistake.\" This method is especially helpful for Should Statements and Labeling." },
    { category: "Semantic Techniques", name: "Let's Define Terms", weight: 7, description: "When you label yourself as \"inferior,\" \"a fool,\" or \"a loser,\" ask yourself what those labels mean. What's the definition of \"a fool\" or \"a loser\"? When you try to define these terms, you'll discover there's no such thing as \"a fool\" or \"a loser.\" Foolish behavior exists, but \"fools\" and \"losers\" do not." },
    { category: "Semantic Techniques", name: "Be Specific", weight: 7, description: "Stick with reality and avoid judgments about reality. For example, instead of thinking of yourself as defective or worthless, you can focus on your specific strengths and weaknesses." },
    { category: "Quantitative Techniques", name: "Self-Monitoring", weight: 1, description: "Keep track of repetitious negative thoughts or anxiety-producing fantasies by counting them. You can keep a 3x5 card in your wallet or pocket and put a tick mark on it each time you have a negative thought. Alternatively, you can wear a wrist-counter like the ones golfers use to keep track of their scores. Record the total number of negative thoughts each day on your calendar. Often, the upsetting thoughts will diminish or disappear within two to three weeks." },
    { category: "Quantitative Techniques", name: "Negative Practice / Worry Breaks", weight: 7, description: "Schedule time to intentionally worry or criticize yourself. For example, if you constantly beat up on yourself because of your shortcomings, you can schedule several five-minute periods each day to berate yourself and feel miserable. At those times, you can be as self-critical as you want and rip yourself to shreds with gusto. Use the rest of your time for positive, productive living." },
    { category: "Humor-Based Techniques", name: "Paradoxical Magnification", weight: 7, description: "Instead of trying to refute your negative thoughts, you can buy into them and exaggerate them. Try to make them as extreme as possible. For example, if you feel inferior, you could tell yourself, \"Yes, it's true. In fact, I'm probably the most inferior person in California at this time.\" Paradoxically, this can sometimes provide objectivity and relief. Of course, if you're really upset, this technique may have the unintended effect of making you feel even worse. If so, try another method." },
    { category: "Humor-Based Techniques", name: "Shame-Attacking Exercises", weight: 1, description: "If you suffer from shyness, you probably have intense fears of looking foolish in front of other people. Shame-Attacking Exercises are a specific and potent antidote to these kinds of fears. You intentionally do something foolish in public so you can get over this fear. For example, you could stand up and announce each stop on a bus or shout out the time in a crowded department store. When you make a fool of yourself on purpose, you discover that the world doesn't come to an end after all, and that people don't really look down on you. This discovery can be liberating." },
    { category: "Role-Playing Techniques", name: "Externalization of Voices", weight: 1, description: "This technique transforms intellectual understanding into emotional change at the gut level. It's the most powerful of all the CBT techniques, but it can be quite challenging and even a bit upsetting at first. You and another person will take turns playing the role of your negative thoughts and the role of your positive thoughts. The person playing the negative thoughts attacks, and the person playing the positive thoughts defends. Use role-reversals when you get stuck. In the \"I-I\" version of the Externalization of Voices, both of you will speak in the first person, \"I.\" In the \"You-I\" version, the person playing the negative thoughts will speak in the second-person, \"You,\" and the person playing the positive thoughts will speak in the first person, \"I.\" The \"I-I\" method is gentle and safe, but less effective. The \"You-I\" method is more intimidating and challenging, but has far greater healing power." },
    { category: "Role-Playing Techniques", name: "Feared Fantasy Technique", weight: 1, description: "Like the Externalization of Voices, this is a two-person technique. You and the other person act out your worst fears, such as being rejected by an exceptionally hostile critic because you aren't smart enough or good enough. When you face your worst fear, you often gain liberation from it. Your worst fears don't usually turn out to be real monsters, but figments of your imagination that you can defeat with a little logic, compassion, and common sense. Other Role-Playing Methods include Cognitive Techniques like the Double Standard Technique and Acceptance Paradox, Motivational Techniques like the Devil's Advocate, and Exposure Techniques like the David Letterman Technique and Flirting Training. The Interpersonal Techniques, such as the Five Secrets of Effective Communication and One-Minute Drill also work extremely well in a role-playing format." },
    { category: "Philosophical / Spiritual Techniques", name: "Acceptance Paradox", weight: 1, description: "Instead of defending against your own self-criticisms, you can find truth in them and accept your shortcomings with tranquility. Tell yourself, \"It's true that I have many inadequacies. In fact, there is very little, if anything, about me that couldn't be improved considerably.\"" },
    { category: "Visual Imaging Techniques", name: "Time Projection", weight: 1, description: "Future Projection. If you're depressed, you can take a mental trip into the future and imagine that you've recovered. The current self who feels worthless and defeated can have a conversation with the future self who feels joy and self-esteem. The outpouring of emotion will often have a cathartic effect. Past Projection. You can also take a mental trip into your past and have a conversation with someone who hurt or abused you. This will give you the chance to express thoughts and feelings that have been bottled up and eating away at you for many years." },
    { category: "Visual Imaging Techniques", name: "Humorous Imaging", weight: 1, description: "When you feel consumed with anxiety or anger, it can sometimes help to visualize something humorous. A depressed woman obsessed about the fact that she'd gotten screwed in her divorce settlement. She could barely make ends meet, and became furious every time she fantasized about her ex-husband cavorting with his new trophy wife on his yacht and living in the lap of luxury. The constant feelings of anger and resentment were making her miserable. She found that picturing him at a board meeting in his underpants made her giggle. This was a useful antidote to the feelings of rage that were plaguing her." },
    { category: "Visual Imaging Techniques", name: "Cognitive Hypnosis", weight: 1, description: "You'll need a therapist who uses hypnosis if you want to try this technique, and you'll have to be hypnotizable—this includes about a third of us. After inducing a trance, the hypnotist may suggest that you're standing in a special library with two sets of shelves. The shelves on the left contain intensely negative books, like \"The Book of Rape\" and \"The Book of Despair,\" and the shelves on the right contain positive books, like \"The Book of Joy\" and \"The Book of Self-Esteem.\" When you take a book from the shelf on the left, you'll discover that it's about you. It contains descriptions of all your negative thoughts, memories, and fears. When you read from this book, you'll feel overwhelmed with feelings of depression, anxiety, hopelessness and shame. Your hypnotist will guide you as you destroy this book. You can burn it, bury it, or shred it. Then you'll find yourself in the library again, where you'll take a book from the shelf on the right. Once again, you'll discover that it's all about you, but this time, it's filled with positive messages of self-esteem, creativity, and optimism. As you read from this book, you'll be flooded with feelings of inner peace." },
    { category: "Uncovering Techniques", name: "Individual Downward Arrow", weight: 1, description: "Draw a downward arrow under a negative thought on your Daily Mood Log and ask yourself, \"Why would it be upsetting to me if this thought were true? What would it mean to me?\" A new negative thought will come to mind. Write it down under the arrow and repeat this process several times. When you review the chain of negative thoughts, along with the list of Common Self-Defeating Beliefs (SDBs), you can pinpoint the attitudes and beliefs that make you vulnerable to depression and anxiety, such as Perfectionism, the Achievement Addiction, or the Brushfire Fallacy." },
    { category: "Uncovering Techniques", name: "Interpersonal Downward Arrow", weight: 1, description: "Draw a downward arrow under a negative thought on your Daily Mood Log and ask yourself, \"If that were true, what would it tell me about the type of person s/he is? The type of person I am? The type of relationship we have?\" A new negative thought will come to mind. Write it down under the arrow and repeat this process several times. The thoughts you generate will help you uncover the Self-Defeating Beliefs that lead to problems in your relationships with other people, such as Entitlement, Truth, or Submissiveness." },
    { category: "Uncovering Techniques", name: "What-If Technique", weight: 1, description: "This Uncovering Technique was developed specifically for anxiety. Draw a downward arrow under a negative thought on your Daily Mood Log and ask yourself, \"What if that were true? What's the worst that could happen? What do I fear the most?\" A new negative thought or fantasy will come to mind. Write it down under the arrow and repeat this process several times. You'll generate additional thoughts that will lead to the fantasy that frightens you the most. Then you can ask yourself, \"How likely is it that this would happen? And could I live with it if it did?\"" },
    { category: "Uncovering Techniques", name: "Hidden Emotion Technique", weight: 7, description: "This technique is based on the idea that when you're anxious, you may be avoiding a personal problem that you don't want to face. Bringing the problem to conscious awareness and expressing your feelings will often eliminate your anxiety. Ask yourself, \"Am I focusing on my anxiety to avoid dealing with something upsetting? What's the real problem that's bothering me? Do I secretly resent my spouse or my job? Am I unhappy about being in school? How do I really feel?\"" },
    { category: "Motivational Techniques", name: "Straightforward and Paradoxical Cost-Benefit Analysis (CBA)", weight: 1, description: "When you do a Straightforward CBA, you list the advantages and disadvantages of a negative thought (\"I'm such a loser\") or Self-Defeating Belief (\"I should be perfect\"). You can also do a CBA for a negative feeling (like anger, guilt, inferiority or anxiety), a habit (such as drinking, using drugs, overeating or procrastinating), or a relationship problem (such as blaming your spouse for your marital problems). Ask yourself, \"What are the advantages and disadvantages of this belief, feeling or habit? How will it help me, and how will it hurt me?\" After you list all the advantages and disadvantages, balance them against each other on a 100-point scale so you can see whether the costs or the benefits of your mindset are greater. When you do a Paradoxical CBA, you list only the advantages of a negative thought, belief, feeling, habit, or relationship problem. Now ask yourself, \"Given all these advantages, why should I change?\" This will make you aware of the powerful forces that keep you stuck." },
    { category: "Motivational Techniques", name: "Devil's Advocate", weight: 1, description: "This is a Role-Playing Technique. Another person plays the role of the Devil who tempts you to drink, overeat, procrastinate, or date the wrong person. Your job is to talk back to those thoughts in real time. Use role-reversals when you get stuck. For example, if you're struggling to stick with your diet, imagine being in a mall where fast food is sold. The Devil might say, \"Gee, why don't you go and get one of those hot, buttery cinnamon buns? They just came out of the oven. It would taste so good. You deserve it!\" You can fight back and say, \"I don't need a cinnamon bun, and I'll feel terrible if I give in. I'm determined to stick with my diet, and I'm looking forward to fitting into more attractive clothes.\" The Devil will try to break you down again, and you can fight back." },
    { category: "Motivational Techniques", name: "Stimulus Control", weight: 1, description: "If you're trying to break a bad habit, such as alcoholism or overeating, you can reduce temptation rather than struggling with it. For example, if you drink too much, you can get rid of all the alcoholic beverages in your house and avoid going to places where alcohol is served. Stimulus Control is not a complete treatment for any addiction, but it can be an important part of a more comprehensive program." },
    { category: "Motivational Techniques", name: "Decision-Making Form", weight: 1, description: "If you're stuck on the horns of a dilemma, the Decision-Making Form can help you sort out your options and get unstuck. It won't tell you what you should do, but will show you what the real issues are and how you feel about them." },
    { category: "Motivational Techniques", name: "Daily Activity Schedule", weight: 1, description: "When you're depressed, everything seems overwhelming. Nothing seems worth doing, so you may give up on life. The Daily Activity Schedule can help you overcome do-nothingism. Record what you do each hour from the time you get up in the morning to the time you go to bed at night. Rate how satisfying each activity was on a scale from 0 (not at all satisfying) to 5 (the most satisfying). A review of the schedule will show you which activities boost your mood the most." },
    { category: "Motivational Techniques", name: "Pleasure Predicting Sheet", weight: 1, description: "Schedule a series of activities with the potential for pleasure, learning, or personal growth. Indicate who you plan to do each activity with. Include activities you can do by yourself (such as jogging) as well as activities with other people. Predict how satisfying each activity will be on a scale from 0% (the least) to 100% (the most). After you complete each activity, record how satisfying it actually turned out to be on the same scale. Now compare your actual satisfaction ratings with your predictions. Many depressed people find that lots of activities turn out to be more rewarding than they predicted. This discovery can boost your motivation to become more actively involved in life again. You can also compare the satisfaction you get from being alone to the satisfaction you feel from being with other people. This can help you test Self-Defeating Beliefs such as, \"If I'm alone, I'm bound to feel miserable.\"" },
    { category: "Motivational Techniques", name: "Anti-Procrastination Sheet", weight: 1, description: "Rather than telling yourself you have to do everything all at once, break an overwhelming task down into tiny steps that you can tackle one step at a time. List each step in the left-hand column of the Anti-Procrastination Sheet. In the next two columns, predict how difficult and how satisfying each step will be on a scale from 0% – 100%. After completing each small step, record how difficult and how satisfying it turned out to be in the last two columns. Now compare your predictions with the outcome. Many people discover that each step is far easier and more rewarding than they expected." },
    { category: "Classical Exposure Techniques", name: "Gradual Exposure and Flooding", weight: 1, description: "When you use Gradual Exposure, you expose yourself to the thing you fear in small steps. For example, if you have an elevator phobia, you could get on an elevator, go up one floor, and get off. Once you're comfortable with that, you could ride the elevator for two floors. You can gradually increase the length of time you spend in the elevator. You can use Gradual Exposure for any phobia, such as the fear of heights, needles, or dogs, as well as other forms of anxiety, such as shyness or Obsessive-Compulsive Disorder. You can also create a Fear Hierarchy, listing the least threatening situation as +1, and the most threatening as +10. You can record the type and amount of exposure you perform each day, as well as how anxious you felt, between 0% and 100%. When you use Flooding, you expose yourself to the thing you fear all at once. For example, if you have an elevator phobia, you can force yourself to get on an elevator and ride up and down, no matter how anxious you feel, until your fear disappears. Flooding is more frightening than Gradual Exposure, but it works more rapidly. Both approaches have been used successfully in the treatment of nearly all forms of anxiety, so you can use the approach that appeals to you the most." },
    { category: "Classical Exposure Techniques", name: "Response Prevention", weight: 1, description: "Response Prevention is an important key to the treatment of all forms of anxiety. It's often combined with exposure. For example, let's say you have a powerful urge to check the mailbox over and over after you drop a letter in. Using Response Prevention, you would drop the letter in the mailbox and walk away without checking it as you usually do. Your anxiety will temporarily get worse, and you'll feel compelled to check it. But if you refuse to give in to this urge, your anxiety will eventually disappear." },
    { category: "Classical Exposure Techniques", name: "Distraction", weight: 1, description: "If you feel anxious, you can distract yourself from the upsetting thoughts by concentrating intensely on something else. For the best results, you can combine Distraction with Gradual Exposure or Flooding. For example, if you feel panicky during an airplane flight, you can work on a crossword puzzle or engage the passenger next to you in conversation. Some therapists recommend moving the eyes back and forth from left to right during exposure. This is called EMDR (Eye Movement Desensitization and Reprocessing). Others recommend tapping rhythmically on some part of your body, like your clavicle or eyebrow, during exposure. This is called TFT (Thought Field Therapy). Although these techniques are controversial, there's no harm in trying them, and they might make the exposure somewhat less upsetting." },
    { category: "Cognitive Exposure Techniques", name: "Cognitive Flooding", weight: 7, description: "Cognitive Flooding is useful when you can't expose yourself to the thing you fear in reality. For example, if you have a fear of flying, you can't expose yourself to an actual airplane crash in order to overcome your fears! However, you can confront this fear in your mind's eye using Cognitive Flooding. Visualize your worst fear, such as feeling trapped in a plane that's crashing toward the earth in a ball of flames while all the passengers scream in terror. Try to endure the anxiety for as long as you can. If you become panicky, don't fight it! Instead, try to make the panic even worse. Eventually, the anxiety will burn itself out because your body simply cannot create anxiety indefinitely." },
    { category: "Cognitive Exposure Techniques", name: "Image Substitution", weight: 1, description: "Substitute a more positive or peaceful image for a frightening one. For example, during an airplane flight, you can fantasize landing safely or relaxing on a beach instead of imagining the plane crashing in flames." },
    { category: "Cognitive Exposure Techniques", name: "Memory Rescripting", weight: 7, description: "If you've been a victim of sexual or physical abuse, you may experience flashbacks with vivid memories of the traumatic episode. These mental pictures can be likened to a horrifying internal movie that you replay over and over, in exactly the same way every time. You can edit the frightening scenes in this movie in much the same way that you can change your negative thoughts. For example, if your best buddy was killed by a hand grenade when you were fighting together in Vietnam, horrifying memories of his body being blown apart may haunt you. You can bring him back to life in your mind's eye and tell him all the things you never got to say before he died. Then you can give him a proper burial and say goodbye. Changing the images can create a sense of mastery and help you overcome the feelings of helplessness that resulted from being a victim. In addition, the intentional exposure will desensitize you, and the traumatic memories will lose their power to intimidate you." },
    { category: "Interpersonal Exposure Techniques", name: "Smile and Hello Practice", weight: 1, description: "If you're shy, you can force yourself to smile and say hello to 10 or 20 strangers each day. Use a 3x5 card to record how many people respond positively, neutrally, and negatively. You'll often discover that people are much friendlier than you expected. This discovery can help you overcome your fears of rejection or looking foolish." },
    { category: "Interpersonal Exposure Techniques", name: "David Letterman Technique", weight: 1, description: "You can learn how to make casual conversation with anyone by using the Five Secrets of Effective Communication, especially the Disarming Technique, Inquiry, and Stroking. These are the same skills used by successful talk-show hosts like David Letterman and Jay Leno. They appear charming, personable and relaxed because they always keep the spotlight on the other person. Instead of trying to impress people by talking about yourself, you can focus on them in a friendly way. Find truth in what they say. Express curiosity and admiration. Ask questions and encourage them to open up. You'll find that most people are somewhat bored and lonely, and love to be the center of attention." },
    { category: "Interpersonal Exposure Techniques", name: "Self-Disclosure", weight: 1, description: "Instead of shamefully hiding your feelings of shyness or nervousness in a social situation, you can disclose them openly. This technique requires a good sense of self-esteem to be effective. If it's done skillfully, it will allow you to form real relationships with people instead of trying to put on a show and pretend to be something that you're not. This technique is based on the rather unintuitive idea that shyness without shame is actually an asset, because it makes you seem more human and personable." },
    { category: "Interpersonal Exposure Techniques", name: "Flirting Training", weight: 1, description: "You learn to flirt in a playful, light-hearted way, rather than interacting with others in such a formal, heavy manner. Paradoxically, when you lighten up and learn to stop taking people so seriously, they're more likely to find you attractive and may even start chasing you." },
    { category: "Interpersonal Exposure Techniques", name: "Rejection Practice", weight: 1, description: "If you're shy and afraid of rejection, you can try to accumulate as many rejections as you can instead of trying so hard to find someone to love you. Although this takes tremendous courage, you'll discover that the world doesn't actually come to an end when you're rejected. Paradoxically, when you stop fearing rejection, you stop getting rejected." },
    { category: "Interpersonal Techniques", name: "Relationship Cost-Benefit Analysis (CBA)", weight: 1, description: "List the advantages and disadvantages of blaming the other person for the problems in your relationship. You'll discover that there are lots of advantages: ● You can feel morally superior. ● You won't have to examine your own role in the problem. ● You'll feel like truth is on your side. ● You can get back at the other person without feeling guilty. ● You can feel powerful. ● You can tell your friends what a loser the other person is, and they'll probably agree with you. There may also be some disadvantages. You won't be able to resolve the problem or get close to the person you're mad at. The conflict will go on and on, and you'll feel consumed by feelings of frustration and anger. Your friends may get tired of your constant complaining. And there won't be any room for personal or spiritual growth. Once you've listed all the advantages and disadvantages on the CBA form, balance them against each other on a 100-point scale. Ask yourself whether the costs or the benefits of this mind-set are greater. If you decide to keep blaming the other person, the prognosis for the relationship will be extremely poor. The willingness to stop blaming them and examine your own role in the problem is the key to developing a more satisfying relationship." },
    { category: "Interpersonal Techniques", name: "Revise Your Communication Style", weight: 1, description: "The Revise Your Communication Style form can help you improve your relationships with family members, friends and colleagues. There are five steps: Step 1. Write down one thing the other person said to you. Step 2. Write down exactly what you said next. Step 3. Analyze what you wrote down in Step 2. Was it an example of good or bad communication? Step 4. Think about the consequences of what you wrote down in Step 2. How will the other person think and feel? What will she or he say next? Will your response make the situation better or worse? Step 5. Generate a more effective response using the Five Secrets of Effective Communication." },
    { category: "Interpersonal Techniques", name: "Five Secrets of Effective Communication", weight: 1, description: "The Five Secrets of Effective Communication can help you resolve virtually any relationship problem quickly. These techniques require considerable practice and must come from the heart or they'll backfire. 1. The Disarming Technique. Find some truth in what the other person is saying, even if it seems totally unreasonable or unfair. 2. Empathy. Try to see the world through the other person's eyes. Paraphrase their words (Thought Empathy) and acknowledge how they're probably feeling, based on what she or he said (Feeling Empathy). 3. Inquiry. Ask gentle, probing questions to learn more about what the other person is thinking and feeling. 4. \"I Feel\" Statements. Express your own ideas and feelings in a direct, tactful manner. Use \"I Feel\" Statements, such as \"I'm feeling upset,\" rather than \"You\" statements, such as \"You're making me furious!\" 5. Stroking. Convey an attitude of respect, even if you feel angry with the other person. Find something genuinely positive to say, even in the heat of battle." },
    { category: "Interpersonal Techniques", name: "One-Minute Drill", weight: 1, description: "You and your partner take turns playing the roles of Talker and Listener. The Talker spends 30 seconds expressing his or her feelings about a relationship problem. The Listener paraphrases what the Talker said as accurately as possible. The Talker rates the Listener's accuracy from 0% – 100%. Once the Listener receives a rating of 95% or better, you can do a role-reversal. This technique ensures nearly perfect communication. It quickly breaks the pattern of accusation, self-defense, and hostility, and shifts the dialogue to a level of greater vulnerability and intimacy." },
    { category: "Misc", name: "Havening", weight: 10 },
    { category: "Misc", name: "Havening touch", weight: 10 },
    { category: "Misc", name: "Belly breathing", description: "Focus on the rise and fall of my belly", weight: 10 },
    { category: "Misc", name: "Nostril breathing", description: "Focus on the feel of the air touching my inner nostrils", weight: 10 },
    { category: "Misc", name: "Breathe in, Breath out 3 times", weight: 10 },
    { category: "Misc", name: "Breathe in sync with my thoughts", weight: 10 },
    { category: "Misc", name: "Breathe in think, Breath out think", weight: 10 },
    { category: "Misc", name: "Watch what the breath does to my body", weight: 10 },
    { category: "Misc", name: "Touch my fidget toy & take 3 breaths", weight: 10 },
    { category: "Misc", name: "Count my thoughts", weight: 10 },
    { category: "Misc", name: "Embrace my thoughts", weight: 10 },
    { category: "Misc", name: "Feel my thoughts in my body", weight: 10 },
    { category: "Misc", name: "Z Point Erase the Tape", weight: 10 },
    { category: "Misc", name: "Be Set Free Fast", description: "Use a keyword after each sentence", weight: 10 },
    { category: "Misc", name: "Write thoughts down or visualize the words", weight: 10 },
    { category: "Misc", name: "Visualize my thoughts as colors, sizes, and shapes inside of my body", weight: 10 },
    { category: "Misc", name: "Visualize my thoughts as colors, sizes, and shapes outside of my body", weight: 10 },
    { category: "Misc", name: "Watch my thinker", weight: 10 },
    { category: "Misc", name: "Thinking time", weight: 10, description: "Give my thinker my full attention" },
    { category: "Misc", name: "Thought defusion--imagine my thoughts on leaves and flying away", weight: 10 },
    { category: "Misc", name: "Thought defusion--boring voice i.e. Eckhart Tolle", weight: 10 },
    { category: "Misc", name: "Watch breathing while feeling sensations & paying attention to my thinking", weight: 10 },
    { category: "Misc", name: "Label my thoughts", weight: 10 },
    { category: "Misc", name: "Feel the Inner Body", weight: 10 },
    { category: "Misc", name: "Sedona Method: Triple Welcoming", weight: 10 },
    { category: "Misc", name: "Sedona Method: Could you? Would you? When?", weight: 10 },
    { category: "Misc", name: "Sedona Method: 5th Way", weight: 10 },
    { category: "Misc", name: "Sedona Method: Holistic Releasing", weight: 5 },
    { category: "Misc", name: "Sedona Method: Could you notice this is just a memory?", weight: 5 },
    { category: "Misc", name: "Question my thoughts", weight: 10 },
    { category: "Misc", name: "Daily Mood Log--automatic thought, distortions, realistic response", weight: 10 },
    { category: "Misc", name: "You are responsible. What are you going to do about it?", weight: 10 },
    { category: "Misc", name: "Acknowledge, validate, redirect", weight: 10 },
    {
        category: "Misc", name: 'Notice your thought, as in: ah, hello, thought. I know you’re not real; you are just a thought. Oh well, you can stay there if you like, but I have things to do today so I’m just going to go ahead and do them. Then if you want to think a positive thought, go right ahead!', weight: 10
    },
    { category: "Misc", name: 'Redirect my attention to the now', weight: 10 },
    { category: "Misc", name: 'Nonstop thinking as long as my shoulder blades are back and down', weight: 10 },
    { category: "Misc", name: 'Acknowledge, embrace, calm, release, transform', weight: 10 },
    { category: "Misc", name: 'See it as an object. Get the lesson. Get rid of the object.', weight: 10 },
    { category: "Misc", name: 'See 3 things, feel 3 things, hear 3 things', weight: 10 },
];

const PAGE_SIZE = 3;
const HIGHLIGHTED_CLASS_NAME = "current";

let techniquesWithWeightedRandomization = [];
let curPos = 0;

const moreTechniquesBtn = document.querySelector(".more");
const resetBtn = document.querySelector(".reset");
const techniquesList = document.querySelector('.techniques');

function weightedRandomSamplingUntilEmpty(items) {
    let results = [];
    let totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

    while (items.length > 0) {
        let threshold = Math.random() * totalWeight;
        let cumulativeWeight = 0;

        for (let i = 0; i < items.length; i++) {
            cumulativeWeight += items[i].weight;
            if (cumulativeWeight >= threshold) {
                results.push(items[i]);
                totalWeight -= items[i].weight;
                items.splice(i, 1); // Remove the item from the array
                break;
            }
        }
    }

    return results;
}

function shuffleItems() {
    techniquesWithWeightedRandomization = weightedRandomSamplingUntilEmpty(TECHNIQUES.slice());
    console.log("🚀 ~ shuffleItems ~ techniquesWithWeightedRandomization:", techniquesWithWeightedRandomization)
}

function removeHighlighting() {
    const highlightedItems = document.querySelectorAll(`.${HIGHLIGHTED_CLASS_NAME}`);
    highlightedItems.forEach(item => item.classList.remove(HIGHLIGHTED_CLASS_NAME));
}

function getMoreTechniques() {
    const endPos = Math.min(curPos + PAGE_SIZE, techniquesWithWeightedRandomization.length);
    removeHighlighting();
    for (let i = curPos; i < endPos; i++) {
        const { name, description } = techniquesWithWeightedRandomization[i];
        const li = document.createElement("li");
        li.className = HIGHLIGHTED_CLASS_NAME;
        li.textContent = `${name} `;

        if (description) {
            const btn = document.createElement("button");
            btn.textContent = "Show Description";
            let descriptionShown = false;
            let descriptionElement = null;

            btn.addEventListener("click", () => {
                if (!descriptionShown) {
                    if (!descriptionElement) {
                        descriptionElement = document.createElement("p");
                        descriptionElement.className = "description"
                        descriptionElement.innerText = description;
                    }
                    li.appendChild(descriptionElement);
                    btn.textContent = "Hide Description";
                    descriptionShown = true;
                } else {
                    li.removeChild(descriptionElement);
                    btn.textContent = "Show Description";
                    descriptionShown = false;
                }
            });

            li.appendChild(btn);
        }
        techniquesList.prepend(li);
    }
    curPos = endPos;
}

function resetTechniques() {
    techniquesList.innerHTML = "";
    shuffleItems();
    curPos = 0;
    getMoreTechniques();
}

moreTechniquesBtn.addEventListener("click", getMoreTechniques);
resetBtn.addEventListener("click", resetTechniques);

resetTechniques();  // Initialize the page with techniques
