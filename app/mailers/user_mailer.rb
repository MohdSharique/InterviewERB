class UserMailer < ApplicationMailer
    default from: '1sharique1@gmail.com'

    def interview_info
        @participant = params[:participant]
        @interview = params[:interview]
        mail(to: @participant.email, subject: 'Interview Scheduled.')
    end
end
