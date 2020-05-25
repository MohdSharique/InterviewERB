class ReminderWorker
    include Sidekiq::Worker

    def perform(interview_id)
        ParticipantMailer.reminder_info(interview_id).deliver_now
    end

end