class AmountNumericValidator < ActiveModel::EachValidator

  def validate_each(record, attribute, value)
    unless valid_entry?(value)
      record.errors.add(attribute, 'invalid amount')
    end
  end

  private

  def valid_entry?(value)
    value.is_a?(Numeric)
  end
end
