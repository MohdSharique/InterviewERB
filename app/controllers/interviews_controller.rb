class InterviewsController < ApplicationController
  before_action :set_interview, only: [:show, :edit, :update, :destroy]

  def index
    @interviews = Interview.all
  end

  def create
    @interview = Interview.new(interview_params)
    @interview.save
    redirect_to :action =>'index'
  end

  def new
    @interview = Interview.new
  end

  def edit
  end

  def show
    @interview = Interview.find(params[:id])
    if @participant.email
      @interview.participants<< (@participant)
    end
  end

  def destroy
    @interview = Interview.find(params[:id])
    @interview.destroy
    redirect_to :action =>'index'
  end

  def update
    @interview.update(interview_params)
    redirect_to :action =>'index'
  end

  private
    def set_interview
      @interview = Interview.find(params[:id])
      @participants = @interview.participants
      @participant = Participant.new
    end
    
    def interview_params
      params.require(:interview).permit(:title, :start_time, :end_time, :resume)
    end
end
