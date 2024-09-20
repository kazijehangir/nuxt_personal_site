---
title: How Technical Interviews Work
description: ""
date: May 14 2018
---

There is a lot of information out there regarding technical interviews and 
these guides are much better at advice than I can ever give. The main one I can
recommend is “Cracking the Coding Interview”; it is an invaluable resource 
while preparing for these interviews.



That said, I wanted to give a quick rundown of what I know about the interview 
process based on personal experience.



## The overall process&nbsp;



### Automated resume screening



Most people will apply online to these companies and submit their resume for an
automatic review process. People suggest that using a difficult to understand 
format (for a machine) for your resume is a bad idea. There is probably some 
keyword matching and some ML thrown in there. Regardless, I dont think there 
is much you can do to optimize your resume for this step. Make a good resume 
(for a human reviewer) and that should be good enough for the algorithm as well.



If you can get a referral into the company, you can skip this step altogether. 
Take a look at my post about how-referrals-work for a detailed explaination.



### Recruiter resume screening



Similar to the above, having an objectively good resume is the way to go here.
Look up some guides on good resume practices. Take a look at eye movement heat 
maps for recruiters, it really puts things into perspective.



### Online test/quiz



This is usually just a very preliminary weeding out process. Take a look at 
Google Code Jam questions for some examples and a basic idea of the difficulty 
level. You typically get 2 questions and 2+ hours to solve them. I believe most
people with reasonable programming skills should be able to solve these 
questions. If you cannot solve these in 2 hours without the pressure of an 
actual interview, you really need to brush up your programming/problem solving
skills.



### Technical interviews (2 for internship, 4/5 for full time)



This is the most important step of the entire process, and the one most people 
fail at. I feel there is no subsitute for practice through actual interviews 
and mock interviews for this. No amount of coding problems or programming 
competitions will prepare you for ‘interviewing’ well. For that you need to be 
comfortable not only approaching the problem well and solving it, but also 
speaking out loud all through it.



Remember the process of solving a problem is more important than the actual 
solution to the interviewer. They already checked that you can solve programming
problems in the online quiz. Now they are trying to judge you on a different 
scale. If you stay quiet for 5-10 miutes and come up with the optimal solution,
the interviewer will probably not be impressed. What’s better is to spend 
10-15 minutes discussing the problem at hand and possible solution with the 
interviewer and making sure you get to the solution with the interviewer in 
tow, not just inform them when you are done.



Hopefully, a good set of mock interviews early enough should tell you about 
your weak areas and you can work on them. I can only give a general set of tips
on stuff that I feel people commonly miss out on.



### A interview can have one or two questions. Often there is one standard 
programming question and then one system design question (sometimes this is 
skipped for interns). In other cases, the interviewer will give you a simple 
question and then once you’re done with it, they will introduce some special 
case or variation to see how you adapt to changing requirements. Learn to 
properly judge which kind of question the interviewer is asking and time 
yourself correctly.Related to the above, don’t lose track of time. 
That doesn’t mean that you keep freaking out about the ticking clock, but don’t
keep talking and talking until there are 5 minutes left in the interview.
Set a time limit to when you will begin writing code. Judge how much 
time the interviewer expects you to spend on a question (see above), and spend 
at most 30-40 percent discussing possible solutions. For example, in a 1 hour 
interview if you feel the question is 30 minutes long, decide to start writing
code on the board at the 10 minutes mark. Expect to spend 10 minutes writing 
code, and then 10 more minutes running tests and discussing runtime.
Don’t jump to the best/optimal solution immediately. Even if you know what the
best solution is, it’s best to mention the brute force or suboptimal 
solutions (no matter how obvious they seem to you), and then quickly also 
tell them why you rejected those. That will tell the interviewer you know 
exactly why the solution you come up with is the best.That said, if you 
can’t come up with a solution you think is optimal, don’t waste all the 
interview discussing/thinking about it. An implemented suboptimal solution 
is many times better than a unimplemented optimal one.If on a board, write 
down the question/details as the interviewer tells you. Write down everything
you think is important. Learn to ask questions that will define the problem
more, for example if the input will only be integers, the ranges etc. This
will give you time where you can keep talking slightly ‘mindlessly’ and 
you can think in advance about the solutions.Write down test cases before
anything else. No need to write working code for test cases. Stuff like 
foo(“input”) =&gt; “expected_output” is completely fine. This will ensure
you have a starting point for the logic as well as ensure that you and 
the interviewer are on the same page regarding the problem.Write down 
test cases for each corner case. I cannot emphasise how important good 
test cases are. Writing test cases first and dry running them before 
telling the interviewer you are done will automatically put you ahead of
most people. Interviewers love Test-Driven-Developement.Practice 
talking out loud when thinking about the problem at the same time. Most people 
are used to being left alone and staring at the screen in silence and then comng
up with a solution. That doesn’t work in an interview. Don’t be silent for more
than 5-7 seconds. Even when writing code keep talking about what it does. 
Bonus points if you relate it to the test cases you wrote in the start, for 
example “This if condition handles the base case tested in that test case…”.
Start running the test cases on your own when you feel you are done. Don’t 
wait for the interviewer to tell you to test your code. The same goes for 
runtime. Once you are done with the test cases, discuss the runtime (talk 
with the interviewer and take him through how you figure out the runtime for 
your solution), and then write it down in Big-O notation.If the interviewer 
says ANYTHING when you are writing the code or discussing test cases or 
possible solutions, take careful note of it. Nothing an interviewer says is 
useless. It is more often than not a carefully thought out comment to point 
out some mistake or to nudge you in the correct direction.If you are 
completely blank and cannot think of any solution, starting running the 
problem through the data structures you know and try to find if there is any 
which has a special property which makes the solution obvious. Most problems 
are actually just applying the proper data structure.Team matching



This is the good part. You have cleared the technical interviews and are deemed 
fit for hire by the company. Now you will be added to the pool of accepted 
candidates and team with open positions can review your interests/skills and 
contact you for a chat if they think there’s a match.



How many teams you are contacted by/can talk to depends on the office you are 
applying to. A bigger office means you get more choice with deciding. Sometimes
you only get one shot at a team matching interview, so don’t be too picky, but
don’t sign up to work with a team you absolutely have nothing in common with.



This step might be skipped if you are converting from an intern position to full
time and your team specifically requested to hire you, or if you were hand 
picked from the industry for a specific team.



### Offer



Congratulations, it is time for offer. Once a team has agreed to hire you, and 
you have indicated that you want to join them as well, your recruiter will 
discuss the offer with you. There is room for negotiations, but it depends a 
lot on your background and other competing offers. If you are a fresh grad with
no other competing offers from a similar big company, you don’t have much room 
for negotiation.
