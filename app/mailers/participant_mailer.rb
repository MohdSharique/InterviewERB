class ParticipantMailer < ApplicationMailer

    def interview_info(email_id, interview_id)
        @participant = Participant.find_by_email(email_id)
        @interview = Interview.find(interview_id)
        mail(to: @participant.email, subject: 'Interview Scheduled.')
    end

    def update_info(interview_id)
        @interview = Interview.find(interview_id)
        emails = []
        for participant in @interview.participants do 
            emails.append(participant.email)
        end
        mail(to: emails, subject: 'Interview details Updated.')
    end

    def reminder_info(interview_id) 
        @interview = Interview.find(interview_id)
        if (@interview_id.start_time - 30.minutes) <= Time.now.utc
            emails = []
            for participant in @interview.participants do 
                emails.append(participant.email)
            end
            mail(to: emails, subject: 'Reminder: Coming Interview')
        end 
    end

    def single_reminder_info(email_id)
        @participant = Participant.find_by_email(email_id)
        mail(to: @participant.email, subject: 'Reminder: Coming Interview')
    end
end
