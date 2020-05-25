class SingleReminderWorker
    include Sidekiq::Worker

    def perform(email_id)
        ParticipantMailer.single_reminder_info(email_id).deliver_now
    end

end