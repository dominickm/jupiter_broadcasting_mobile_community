Commit practices and policy
===========================
This document is not "law" of the project but more a guide line to help all participants in the project have the same expectations on each communication and documentation element of the project.

To help keep the project history and communication manageable, as Mike suggested on the podcast, we should have a commit log guide to ensure correct and complete information is shared between the participants of the project.

If participants veer off this guideline too much Mike or other memebers collectively may not accept changes so it is in the interest in each party's continuing participation to adhere to these concepts.

The Commit itself
-----------------
When commiting, ensure the changes in the commit are a logical block of changes relating to one concept or issue.  If you reach a juncture wherein you have numerous issues and concepts in your changeset, please seperate the changes in to blocks of changes in seperate commits with their own log messages. 

Commit log messages
-------------------
Keep the message short, the goal of a commit is to convey the essence of the chagnes in the commit while not constituting a page of documentation. Discussion of issues and development stories is for tickets in the issue tracker.

The log message consists of a subject line or summary, followed by a blank line followed by the body of the message. Often associated with the concept of an email subject line and body of the mail's text. 

The message summary/subject should usually not be longer than about 72 characters in length to avoid line wrapping or summary truncation in various veiwers. Arguments rage over the length of the rest of the commit message's body, so this segment can be re-written when the group offers suitable suggestions. A short few sentences or 2 short paragraphs at the most is the initial suggestion.

Example commit log
------------------
>We have a summary about an important changeset
>
>Our code is now even better than is was before as there is no more 
> broken code, everything works now automagically.
> - here is the first item
> - of a list of items that are relevant to this commit
> We can use - or * for bullets


This guide should be kept pretty simple and not too wordy(which is probably is already). updates welcome.
