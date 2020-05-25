class ParticipantsController < ApplicationController
  before_action :set_participant, only: [:show, :edit, :update, :destroy]

  def index
    @participants = Participant.all
  end

  def create
    
    @participant = Participant.find_by_email(params[:participant][:email])
    if @participant == nil
      @participant = Participant.create(create_participant_params)
    end
    @interview = Interview.find(params[:participant][:interview_id])
    
    NewInterviewWorker.perform_async(params[:participant][:email], params[:participant][:interview_id])
    SingleReminderWorker.perform_at(@interview.start_time - 30.minutes, @participant.email)
      
    @interview.participants<< (@participant)
    @participant.interviews<< (@interview)

    redirect_to root_path
  end

  def new
    @participant = Participant.new
  end

  def edit
  end

  def destroy
    @participant = Participant.find(params[:id])
    @participant.destroy
    redirect_to root_path
  end

  def update
    @participant.update(participant_params)
    redirect_to :action =>'index'
  end

  private
    def set_participant
      @participant = Participant.find(params[:id])
    end

    def create_participant_params
      params.require(:participant).permit(:email)
    end
end
