class NewInterviewWorker
    include Sidekiq::Worker

    def perform(email_id, interview_id)
        ParticipantMailer.interview_info(email_id, interview_id).deliver_now
    end

end