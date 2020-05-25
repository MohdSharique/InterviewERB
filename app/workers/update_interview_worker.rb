class UpdateInterviewWorker
    include Sidekiq::Worker

    def perform(interview_id)
        ParticipantMailer.update_info(interview_id).deliver_now
    end

end