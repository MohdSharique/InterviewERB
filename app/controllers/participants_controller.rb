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
    
    isValid = true
    for i in @participant.interviews do 
      if (@interview.start_time <= i.start_time) && (i.start_time <= @interview.end_time)
        isValid = false
      elsif (@interview.start_time <= i.end_time) && (i.end_time <= @interview.end_time)
        isValid = false
      end
    end

    if isValid
      NewInterviewWorker.perform_async(params[:participant][:email], params[:participant][:interview_id])
      SingleReminderWorker.perform_at(@interview.start_time - 30.minutes, @participant.email)
        
      @interview.participants<< (@participant)
      @participant.interviews<< (@interview)
      redirect_to root_path
    else 
      redirect_to root_path, notice: "The participant has clashing schedule"
    end
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
      params.require(:participant).permit(:email, :role)
    end
end
