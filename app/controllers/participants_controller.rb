class ParticipantsController < ApplicationController
  before_action :set_participant, only: [:show, :edit, :update, :destroy]

  def index
    @participants = Participant.all
  end

  def create
    @participant = Participant.find_by_email(participant_params)
    if @participant == nil
      @participant = Participant.create(create_participant_params)
    end
    @interview = Interview.find(interview_form_param)
    @interview.participants<< (@participant)
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
    redirect_to :action =>'index'
  end

  def update
    @participant.update(participant_params)
    redirect_to :action =>'index'
  end

  private
    def set_participant
      @participant = Participant.find(params[:id])
    end

    def interview_form_param
      params[:participant][:interview_id]
    end
    
    def participant_params
      params[:participant][:email]
    end

    def create_participant_params
      params.require(:participant).permit(:email)
    end
end
