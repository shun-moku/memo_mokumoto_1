class NotesController < ApplicationController
before_action :set_notes, only: [:index, :phase1, :phase2, :phase3]
before_action :authenticate_user!
  def index
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      redirect_to root_path
    else
      render :new
    end
  end

  def destroy
    note = Note.find(params[:id])
    if note.destroy
      redirect_to root_path
    end
  end

  def checked
    note = Note.find(params[:id])
    if note.checked 
      note.update(checked: false)
    else
      note.update(checked: true)
    end

    item = Note.find(params[:id])
    render json: { note: item }
  end

  def phase1
  end
  def phase2
  end
  def phase3
  end
  
  private
  def note_params
    params.require(:note).permit(:memo, :url).merge(user_id: current_user.id)
  end

  def set_notes
    @notes = Note.includes(:user).order(updated_at: :ASC)
  end
end
