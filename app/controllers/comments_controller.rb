class CommentsController < ApplicationController
  before_action :authenticate_user
  
  def create
    @resume = Resume.published.friendly.find(params[:resume_id])
    @comment = @resume.comments.new(comment_parmes)
    
    if @comment.save
      # redirect_to view_resume_path(@resume), notice: "新增留言"
    else
      render "resumes/view", notice: "error!!!"
    end
  end

  private
  def comment_parmes
    params.require(:comment).permit(:content).merge(user: current_user)
  end

end